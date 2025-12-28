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
  collection,
  query,
  where,
  getDocs,
  serverTimestamp
} from 'firebase/firestore';

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

/**
 * Get current user ID (authenticated or anonymous)
 */
export function getUserId() {
  if (auth.currentUser) {
    return auth.currentUser.uid;
  }

  // Fallback to anonymous ID
  let userId = localStorage.getItem('arthshastra-user-id');
  if (!userId) {
    userId = 'anon_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('arthshastra-user-id', userId);
  }
  return userId;
}

/**
 * Sign in with Google
 */
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Save user profile to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      lastLogin: serverTimestamp()
    }, { merge: true });

    // Migrate anonymous data if exists
    const anonymousId = localStorage.getItem('arthshastra-user-id');
    if (anonymousId && anonymousId.startsWith('anon_')) {
      await migrateAnonymousData(anonymousId, user.uid);
    }

    return { success: true, user };
  } catch (error) {
    console.error('Sign in error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Sign out user
 */
export async function signOutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Sign out error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Listen to auth state changes
 */
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

// ============================================
// DATA MIGRATION
// ============================================

async function migrateAnonymousData(anonymousId, newUserId) {
  try {
    // Migrate lesson progress
    const lessonsQuery = query(
      collection(db, 'lesson-progress'),
      where('userId', '==', anonymousId)
    );
    const lessonsSnapshot = await getDocs(lessonsQuery);

    for (const docSnapshot of lessonsSnapshot.docs) {
      const data = docSnapshot.data();
      const newDocId = docSnapshot.id.replace(anonymousId, newUserId);
      await setDoc(doc(db, 'lesson-progress', newDocId), {
        ...data,
        userId: newUserId,
        migratedFrom: anonymousId,
        migratedAt: serverTimestamp()
      });
    }

    // Clear anonymous ID
    localStorage.removeItem('arthshastra-user-id');

    console.log('Data migration completed');
  } catch (error) {
    console.error('Migration error:', error);
  }
}

// ============================================
// LESSON PROGRESS FUNCTIONS
// ============================================

/**
 * Submit a lesson attempt
 */
export async function submitLessonAttempt(lessonId, answers, score, totalQuestions) {
  try {
    const userId = getUserId();
    const percentage = Math.round((score / totalQuestions) * 100);
    const docId = `${userId}_lesson_${lessonId}`;

    // Check existing record
    const existingDoc = await getDoc(doc(db, 'lesson-progress', docId));
    const existingData = existingDoc.exists() ? existingDoc.data() : null;

    const isNewRecord = !existingData || percentage > existingData.percentage;

    if (isNewRecord) {
      await setDoc(doc(db, 'lesson-progress', docId), {
        userId,
        lessonId,
        answers,
        score,
        totalQuestions,
        percentage,
        timestamp: serverTimestamp(),
        attempts: (existingData?.attempts || 0) + 1
      });
    } else {
      // Just update attempts count
      await setDoc(doc(db, 'lesson-progress', docId), {
        ...existingData,
        attempts: existingData.attempts + 1,
        lastAttemptAt: serverTimestamp()
      });
    }

    // Update overall progress
    await updateOverallProgress(userId);

    return {
      success: true,
      isNewRecord,
      percentage,
      bestScore: isNewRecord ? percentage : existingData.percentage
    };
  } catch (error) {
    console.error('Submit lesson error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Load previous lesson answers
 */
export async function loadLessonProgress(lessonId) {
  try {
    const userId = getUserId();
    const docId = `${userId}_lesson_${lessonId}`;

    const docSnapshot = await getDoc(doc(db, 'lesson-progress', docId));

    if (docSnapshot.exists()) {
      return { success: true, data: docSnapshot.data() };
    }
    return { success: true, data: null };
  } catch (error) {
    console.error('Load progress error:', error);
    return { success: false, error: error.message };
  }
}

// ============================================
// QUIZ PROGRESS FUNCTIONS
// ============================================

/**
 * Submit a quiz attempt
 */
export async function submitQuizAttempt(quizId, answers, score, totalQuestions, timeSpent) {
  try {
    const userId = getUserId();
    const percentage = Math.round((score / totalQuestions) * 100);
    const docId = `${userId}_quiz_${quizId}`;

    const existingDoc = await getDoc(doc(db, 'quiz-progress', docId));
    const existingData = existingDoc.exists() ? existingDoc.data() : null;

    const isNewRecord = !existingData || percentage > existingData.percentage;

    if (isNewRecord) {
      await setDoc(doc(db, 'quiz-progress', docId), {
        userId,
        quizId,
        answers,
        score,
        totalQuestions,
        percentage,
        timeSpent,
        timestamp: serverTimestamp(),
        attempts: (existingData?.attempts || 0) + 1
      });
    }

    await updateOverallProgress(userId);

    return { success: true, isNewRecord, percentage };
  } catch (error) {
    console.error('Submit quiz error:', error);
    return { success: false, error: error.message };
  }
}

// ============================================
// OVERALL PROGRESS
// ============================================

async function updateOverallProgress(userId) {
  try {
    // Get all lesson progress
    const lessonsQuery = query(
      collection(db, 'lesson-progress'),
      where('userId', '==', userId)
    );
    const lessonsSnapshot = await getDocs(lessonsQuery);

    let totalLessonScore = 0;
    let totalLessonQuestions = 0;
    let completedLessons = 0;

    lessonsSnapshot.forEach(doc => {
      const data = doc.data();
      totalLessonScore += data.score;
      totalLessonQuestions += data.totalQuestions;
      completedLessons++;
    });

    // Get all quiz progress
    const quizzesQuery = query(
      collection(db, 'quiz-progress'),
      where('userId', '==', userId)
    );
    const quizzesSnapshot = await getDocs(quizzesQuery);

    let totalQuizScore = 0;
    let totalQuizQuestions = 0;
    let completedQuizzes = 0;

    quizzesSnapshot.forEach(doc => {
      const data = doc.data();
      totalQuizScore += data.score;
      totalQuizQuestions += data.totalQuestions;
      completedQuizzes++;
    });

    // Save overall progress
    await setDoc(doc(db, 'overall-progress', userId), {
      lessons: {
        completed: completedLessons,
        totalScore: totalLessonScore,
        totalQuestions: totalLessonQuestions,
        percentage: totalLessonQuestions > 0
          ? Math.round((totalLessonScore / totalLessonQuestions) * 100)
          : 0
      },
      quizzes: {
        completed: completedQuizzes,
        totalScore: totalQuizScore,
        totalQuestions: totalQuizQuestions,
        percentage: totalQuizQuestions > 0
          ? Math.round((totalQuizScore / totalQuizQuestions) * 100)
          : 0
      },
      lastUpdated: serverTimestamp()
    });
  } catch (error) {
    console.error('Update overall progress error:', error);
  }
}

/**
 * Get overall stats for user
 */
export async function getOverallStats() {
  try {
    const userId = getUserId();
    const docSnapshot = await getDoc(doc(db, 'overall-progress', userId));

    if (docSnapshot.exists()) {
      return { success: true, data: docSnapshot.data() };
    }

    return {
      success: true,
      data: {
        lessons: { completed: 0, totalScore: 0, totalQuestions: 0, percentage: 0 },
        quizzes: { completed: 0, totalScore: 0, totalQuestions: 0, percentage: 0 }
      }
    };
  } catch (error) {
    console.error('Get stats error:', error);
    return { success: false, error: error.message };
  }
}
