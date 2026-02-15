// Firebase Configuration for ArthShastra
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  arrayUnion,
  enableIndexedDbPersistence,
  increment
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager
} from 'firebase/firestore';

// ... (keep imports)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firestore with modern persistence settings
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});
const googleProvider = new GoogleAuthProvider();

// Helper functions
export function isOnline() { return navigator.onLine; }

export function getUserId() {
  if (auth.currentUser) return auth.currentUser.uid;
  let userId = localStorage.getItem('arthshastra-user-id');
  if (!userId) {
    userId = 'anon_' + Date.now();
    localStorage.setItem('arthshastra-user-id', userId);
  }
  return userId;
}

// ============================================
// AUTHENTICATION
// ============================================

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    const isNewUser = !userSnap.exists();

    const userData = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      lastLogin: serverTimestamp(),
    };

    if (isNewUser) {
      userData.createdAt = serverTimestamp();
      userData.stats = {
        lessons: { started: 0, completed: 0, totalTimeSpent: 0, completedIds: [] },
        quizzes: { taken: 0, totalQuestions: 0, correctAnswers: 0, bestScore: 0, completedIds: [] },
        streak: { current: 0, longest: 0, lastActiveDate: null }
      };
      userData.recentActivity = [];
    }

    await setDoc(userRef, userData, { merge: true });
    return { success: true, user, isNewUser };
  } catch (error) {
    console.error('Sign in error:', error);
    return { success: false, error: error.message };
  }
}

// ============================================
// UNIFIED TRACKING (SCHEMA V2 - CLEAN)
// ============================================

/**
 * Collection 1: 'users' (LIGHTWEIGHT)
 * - Stores: Profile, aggregated stats (total time, streak), completed lesson IDs.
 * - Use: Fast loading on every page.
 * 
 * Collection 2: 'quiz_attempts' (HISTORY)
 * - Stores: Full detailed report of every quiz (question-by-question analysis).
 * - Use: Only loaded when viewing specific history.
 * 
 * Collection 3: 'activity_logs' (BACKGROUND)
 * - Stores: Technical logs (login, page views).
 * - Use: Debugging only, never loaded by user.
 */

// --- 1. USER STATS (Aggregated) ---
export async function updateUserStats(userId, statsUpdate) {
  try {
    const userRef = doc(db, 'users', userId);

    // We use deep merge but we only touch specific aggregated fields
    // We do NOT store logs array here anymore.
    const updateObject = { stats: {} };

    const processUpdate = (source, target) => {
      Object.keys(source).forEach(key => {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
          target[key] = {};
          processUpdate(source[key], target[key]);
        } else if (typeof source[key] === 'number') {
          // Special handling for 'bestScore' - max, others - increment
          if (['bestScore'].includes(key)) {
            target[key] = source[key]; // Logic handled by caller usually, but safe to overwrite if higher
          } else {
            target[key] = increment(source[key]);
          }
        } else {
          target[key] = source[key];
        }
      });
    };

    processUpdate(statsUpdate, updateObject.stats);
    updateObject.lastActiveDate = serverTimestamp();

    // Streak Logic (Reads first to be safe)
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      const streak = data.stats?.streak || { current: 0, longest: 0, lastActiveDate: null };
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

      let newCurrent = streak.current;
      let newLongest = streak.longest;

      if (streak.lastActiveDate === yesterday) {
        newCurrent++;
        if (newCurrent > newLongest) newLongest = newCurrent;
      } else if (streak.lastActiveDate !== today) {
        newCurrent = 1; // Reset if missed a day
      }

      // Update streak in the write
      updateObject.stats.streak = {
        current: newCurrent,
        longest: newLongest,
        lastActiveDate: today
      };
    } else {
      updateObject.stats.streak = { current: 1, longest: 1, lastActiveDate: new Date().toISOString().split('T')[0] };
      updateObject.createdAt = serverTimestamp();
    }

    await setDoc(userRef, updateObject, { merge: true });
    return { success: true };
  } catch (error) {
    console.error('Stats Update Error:', error);
    return { success: false };
  }
}

// --- 2. QUIZ HISTORY (Detailed) ---
export async function submitDetailedQuizAttempt(quizId, attemptData) {
  console.log("🚀 [FIREBASE] submitDetailedQuizAttempt CALLED", { quizId, attemptData });
  try {
    const userId = getUserId();
    console.log("👤 [FIREBASE] User ID:", userId);

    const { totalScore, totalQuestions, totalTimeSpent, questionAnalytics } = attemptData;
    const percentage = Math.round((totalScore / totalQuestions) * 100);

    // A. Update Aggregate Stats (Collection 1: 'users')
    const statsUpdate = {
      quizzes: {
        taken: 1,
        totalQuestions,
        correctAnswers: totalScore,
      }
    };
    console.log("📊 [FIREBASE] Preparing Stats Update:", statsUpdate);

    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    const currentBest = userSnap.data()?.stats?.quizzes?.bestScore || 0;

    if (percentage > currentBest) statsUpdate.quizzes.bestScore = percentage;
    if (percentage >= 50) {
      // Mark both quiz and lesson as completed when passing
      await updateDoc(userRef, {
        'stats.quizzes.completedIds': arrayUnion(quizId),
        'stats.lessons.completedIds': arrayUnion(quizId)
      });
    }

    console.log("💾 [FIREBASE] Updating User Stats...");
    await updateUserStats(userId, statsUpdate);
    console.log("✅ [FIREBASE] User Stats Updated.");

    // B. Log Detailed Attempt (Collection 2: 'quiz_attempts')
    // Doc ID = userId_quizId_timestamp
    const attemptId = `${userId}_${quizId}_${Date.now()}`;
    const attemptDocRef = doc(db, 'quiz_attempts', attemptId);

    const historyPayload = {
      userId,
      quizId,
      percentage,
      totalScore,
      totalQuestions,
      totalTimeSpent,
      timestamp: serverTimestamp(),
      details: questionAnalytics // { questionId, selectedOption, correctOption, isCorrect, timeSpent }
    };

    console.log("📜 [FIREBASE] Writing to 'quiz_attempts':", attemptId, historyPayload);
    await setDoc(attemptDocRef, historyPayload);
    console.log("🏁 [FIREBASE] Quiz Attempt Saved Successfully!");

    return { success: true, data: { percentage, isNewBestScore: percentage > currentBest } };
  } catch (error) {
    console.error("❌ [FIREBASE] Quiz Submit Error:", error);
    return { success: false, error: error.message };
  }
}

// --- 3. LOGGING (Background) ---
export async function logUserActivity(userId, type, details) {
  try {
    // Write to separate collection 'activity_logs' to keep 'users' clean
    await setDoc(doc(collection(db, 'activity_logs')), {
      userId,
      type,
      details,
      timestamp: serverTimestamp() // Better validation
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

// --- LESSON PROGRESS ---
// Only tracks time spent. Completion is handled by submitDetailedQuizAttempt (>=50% quiz pass).
export async function logLessonProgress(lessonId, timeSpent) {
  try {
    const userId = getUserId();

    const statsUpdate = {
      lessons: {
        totalTimeSpent: timeSpent
      }
    };

    await updateUserStats(userId, statsUpdate);
    return { success: true };
  } catch {
    return { success: false };
  }
}

// --- RESET & UTILS ---
export async function resetUserStats() {
  try {
    const userId = getUserId();
    const userRef = doc(db, 'users', userId);

    // Nuclear Reset: Wipe the stats object completely
    const cleanStats = {
      stats: {
        lessons: { started: 0, completed: 0, totalTimeSpent: 0, completedIds: [] },
        quizzes: { taken: 0, totalQuestions: 0, correctAnswers: 0, bestScore: 0, completedIds: [] },
        streak: { current: 1, longest: 1, lastActiveDate: new Date().toISOString().split('T')[0] }
      },
      // We don't delete the profile info, just stats
      recentActivity: [] // Clear any legacy array if it exists
    };

    // We use setDoc without merge for the stats field to ensure overwrite, 
    // but merge: true for the top level to keep profile data
    await setDoc(userRef, cleanStats, { merge: true });

    // Note: We don't delete 'quiz_attempts' or 'activity_logs' collections 
    // because that requires Admin SDK. But we ignore them in the new UI, 
    // essentially "soft deleting" them from the user's perspective.

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export function onAuthChange(callback) { return onAuthStateChanged(auth, callback); }
export async function signOutUser() {
  try { await signOut(auth); return { success: true }; } catch (e) { return { success: false, error: e.message }; }
}

export async function getQuizAnalytics(quizId) {
  try {
    const userId = getUserId();
    const q = query(
      collection(db, 'quiz_attempts'), // Changed from quiz-history
      where('userId', '==', userId),
      where('quizId', '==', quizId)
    );
    const snap = await getDocs(q);
    const attempts = snap.docs.map(d => d.data());

    if (!attempts.length) return { success: true, data: { totalAttempts: 0, bestPercentage: 0 } };

    return {
      success: true,
      data: {
        totalAttempts: attempts.length,
        bestPercentage: Math.max(...attempts.map(a => a.percentage || 0))
      }
    };
  } catch (e) { return { success: false, error: e.message }; }
}

// Backwards compatibility for Navbar read
export async function getUnifiedStats() {
  const userSnap = await getDoc(doc(db, 'users', getUserId()));
  return userSnap.exists() ? { success: true, stats: userSnap.data().stats } : { success: false };
}
