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
  enableIndexedDbPersistence
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNWG70YquTV8YUam83dlSLPPBUeN7Usac",
  authDomain: "arthshastra-1256di.firebaseapp.com",
  projectId: "arthshastra-1256di",
  storageBucket: "arthshastra-1256di.firebasestorage.app",
  messagingSenderId: "575831581802",
  appId: "1:575831581802:web:19ff6f59f1813e6f61d613",
  measurementId: "G-75QGH6QGFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  console.warn('Firestore persistence error:', err.code);
});

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
// UNIFIED TRACKING (OPTIMIZED)
// ============================================

/**
 * Main collection: 'users' - stores real-time stats
 * Details collection: 'quiz-history' - stores individual attempts for deep analysis
 */

export async function updateUserStats(userId, statsUpdate) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) return;

    const data = userSnap.data();
    const stats = data.stats || {};

    // Recursive merge for nested stats
    const merge = (target, source) => {
      Object.keys(source).forEach(key => {
        if (source[key] instanceof Object && key in target) {
          merge(target[key], source[key]);
        } else if (typeof source[key] === 'number' && typeof target[key] === 'number') {
          target[key] += source[key];
        } else {
          target[key] = source[key];
        }
      });
    };

    merge(stats, statsUpdate);

    // Update streak
    const today = new Date().toISOString().split('T')[0];
    const streak = stats.streak || { current: 0, longest: 0, lastActiveDate: null };
    if (streak.lastActiveDate === new Date(Date.now() - 86400000).toISOString().split('T')[0]) {
      streak.current++;
      if (streak.current > streak.longest) streak.longest = streak.current;
    } else if (streak.lastActiveDate !== today) {
      streak.current = 1;
    }
    streak.lastActiveDate = today;
    stats.streak = streak;

    await updateDoc(userRef, { stats, lastActiveDate: serverTimestamp() });
    return { success: true, stats };
  } catch (error) {
    console.error('Update stats error:', error);
    return { success: false };
  }
}

export async function submitDetailedQuizAttempt(quizId, attemptData) {
  try {
    const userId = getUserId();
    const { totalScore, totalQuestions, totalTimeSpent, questionAnalytics } = attemptData;
    const percentage = Math.round((totalScore / totalQuestions) * 100);

    // 1. Update User Stats (Main document)
    const statsUpdate = {
      quizzes: {
        taken: 1,
        totalQuestions,
        correctAnswers: totalScore,
        totalTimeSpent
      }
    };

    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    const currentBest = userSnap.data()?.stats?.quizzes?.bestScore || 0;

    if (percentage > currentBest) statsUpdate.quizzes.bestScore = percentage;
    if (percentage >= 50) {
      await updateDoc(userRef, { 'stats.quizzes.completedIds': arrayUnion(quizId) });
    }

    await updateUserStats(userId, statsUpdate);

    // 2. Log History (Dedicated collection for review only)
    const attemptId = `${userId}_${quizId}_${Date.now()}`;
    await setDoc(doc(db, 'quiz-history', attemptId), {
      userId, quizId, percentage, totalScore, totalQuestions, totalTimeSpent,
      timestamp: serverTimestamp(), questionAnalytics
    });

    return { success: true, data: { percentage, isNewBestScore: percentage > currentBest } };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function logLessonProgress(lessonId, timeSpent, completed) {
  try {
    const userId = getUserId();
    const statsUpdate = {
      lessons: {
        started: 1,
        completed: completed ? 1 : 0,
        totalTimeSpent: timeSpent
      }
    };
    if (completed) {
      await updateDoc(doc(db, 'users', userId), {
        'stats.lessons.completedIds': arrayUnion(lessonId)
      });
    }
    await updateUserStats(userId, statsUpdate);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function signOutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function logUserActivity(userId, type, details) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      recentActivity: arrayUnion({
        type,
        details,
        timestamp: new Date().toISOString() // Using ISO string for easier client-side display if needed, or serverTimestamp()
      })
    });
    return { success: true };
  } catch (error) {
    console.error('Log activity error:', error);
    return { success: false };
  }
}

export function onAuthChange(callback) { return onAuthStateChanged(auth, callback); }
export async function getUnifiedStats() {
  const userSnap = await getDoc(doc(db, 'users', getUserId()));
  return userSnap.exists() ? { success: true, stats: userSnap.data().stats } : { success: false };
}

export async function getQuizAnalytics(quizId) {
  try {
    const userId = getUserId();
    const q = query(
      collection(db, 'quiz-history'),
      where('userId', '==', userId),
      where('quizId', '==', quizId)
    );

    const querySnapshot = await getDocs(q);
    const attempts = querySnapshot.docs.map(doc => doc.data());

    if (attempts.length === 0) {
      return { success: true, data: { totalAttempts: 0, bestPercentage: 0 } };
    }

    const bestPercentage = Math.max(...attempts.map(a => a.percentage || 0));

    return {
      success: true,
      data: {
        totalAttempts: attempts.length,
        bestPercentage
      }
    };
  } catch (error) {
    console.error('Get quiz analytics error:', error);
    return { success: false, error: error.message };
  }
}
