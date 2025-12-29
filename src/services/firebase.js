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
  orderBy,
  limit,
  serverTimestamp,
  arrayUnion,
  increment,
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

// Enable offline persistence for Firestore
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled in one tab at a time
    console.warn('Firestore persistence failed: Multiple tabs open');
  } else if (err.code === 'unimplemented') {
    // The current browser doesn't support persistence
    console.warn('Firestore persistence not supported in this browser');
  }
});

// Helper function to check if we're online
export function isOnline() {
  return navigator.onLine;
}

// Helper function to save data locally when offline
function saveToLocalStorage(key, data) {
  try {
    const existingData = JSON.parse(localStorage.getItem('arthshastra-offline-queue') || '[]');
    existingData.push({ key, data, timestamp: Date.now() });
    localStorage.setItem('arthshastra-offline-queue', JSON.stringify(existingData));
  } catch (error) {
    console.error('Error saving to local storage:', error);
  }
}

// Helper function to get offline data
export function getOfflineData(key) {
  try {
    const queue = JSON.parse(localStorage.getItem('arthshastra-offline-queue') || '[]');
    return queue.filter(item => item.key === key);
  } catch (error) {
    return [];
  }
}

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

    // Check if user exists (for tracking new vs returning users)
    const existingUserDoc = await getDoc(doc(db, 'users', user.uid));
    const isNewUser = !existingUserDoc.exists();

    // Get device and browser info
    const deviceInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    // Save comprehensive user profile to Firestore
    const userData = {
      // Basic Info (from Google)
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,

      // Auth metadata
      providerId: user.providerData[0]?.providerId || 'google.com',
      lastLogin: serverTimestamp(),
      lastLoginDevice: deviceInfo,

      // Track login count
      loginCount: existingUserDoc.exists()
        ? (existingUserDoc.data().loginCount || 0) + 1
        : 1
    };

    // If new user, add creation data
    if (isNewUser) {
      userData.createdAt = serverTimestamp();
      userData.signupDevice = deviceInfo;
      userData.isNewUser = true;

      // Default profile settings
      userData.profile = {
        displayName: user.displayName,
        className: '',
        board: '',
        school: '',
        city: '',
        state: '',
        targetScore: '',
        studyHoursPerDay: '',
        preferredLanguage: 'English',
        examYear: new Date().getFullYear() + 1
      };

      // Initialize stats
      userData.stats = {
        lessonsCompleted: 0,
        lessonsStarted: 0,
        quizzesTaken: 0,
        quizzesPassed: 0,
        totalQuestionsAttempted: 0,
        totalCorrectAnswers: 0,
        totalTimeSpent: 0,
        averageScore: 0,
        bestScore: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: null
      };

      // Initialize achievements
      userData.achievements = [];

      // Initialize activity log
      userData.recentActivity = [];
    }

    await setDoc(doc(db, 'users', user.uid), userData, { merge: true });

    // Log this login activity
    await logUserActivity(user.uid, 'login', {
      method: 'google',
      device: deviceInfo.platform,
      isNewUser
    });

    // Migrate anonymous data if exists
    const anonymousId = localStorage.getItem('arthshastra-user-id');
    if (anonymousId && anonymousId.startsWith('anon_')) {
      await migrateAnonymousData(anonymousId, user.uid);
    }

    return { success: true, user, isNewUser };
  } catch (error) {
    console.error('Sign in error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Log user activity to Firebase
 */
export async function logUserActivity(userId, activityType, details = {}) {
  try {
    const activityId = `${userId}_${Date.now()}`;

    await setDoc(doc(db, 'user-activity', activityId), {
      userId,
      activityType,
      details,
      timestamp: serverTimestamp(),
      date: new Date().toISOString().split('T')[0]
    });

    // Also update recent activity in user document (keep last 20)
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      const recentActivity = userDoc.data().recentActivity || [];
      recentActivity.unshift({
        type: activityType,
        details,
        timestamp: new Date().toISOString()
      });

      // Keep only last 20 activities
      if (recentActivity.length > 20) {
        recentActivity.pop();
      }

      await updateDoc(doc(db, 'users', userId), {
        recentActivity,
        lastActiveDate: serverTimestamp()
      });
    }
  } catch (error) {
    console.error('Log activity error:', error);
  }
}

/**
 * Update user stats in Firebase
 */
export async function updateUserStats(userId, statsUpdate) {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) return;

    const currentStats = userDoc.data().stats || {};
    const newStats = { ...currentStats };

    // Update specific stats
    Object.keys(statsUpdate).forEach(key => {
      if (typeof statsUpdate[key] === 'number' && typeof newStats[key] === 'number') {
        newStats[key] = newStats[key] + statsUpdate[key];
      } else {
        newStats[key] = statsUpdate[key];
      }
    });

    // Recalculate average score
    if (newStats.quizzesTaken > 0) {
      newStats.averageScore = Math.round(
        (newStats.totalCorrectAnswers / newStats.totalQuestionsAttempted) * 100
      ) || 0;
    }

    // Update streak
    const today = new Date().toISOString().split('T')[0];
    const lastActive = currentStats.lastActiveDate;

    if (lastActive) {
      const lastActiveDate = new Date(lastActive).toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

      if (lastActiveDate === yesterday) {
        newStats.currentStreak = (currentStats.currentStreak || 0) + 1;
        if (newStats.currentStreak > (newStats.longestStreak || 0)) {
          newStats.longestStreak = newStats.currentStreak;
        }
      } else if (lastActiveDate !== today) {
        newStats.currentStreak = 1;
      }
    } else {
      newStats.currentStreak = 1;
    }

    newStats.lastActiveDate = today;

    await updateDoc(doc(db, 'users', userId), {
      stats: newStats,
      lastActiveDate: serverTimestamp()
    });

    return { success: true, stats: newStats };
  } catch (error) {
    console.error('Update stats error:', error);
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

// ============================================
// COMPREHENSIVE MCQ ANALYTICS SYSTEM
// ============================================

/**
 * Submit detailed quiz attempt with comprehensive analytics
 * Tracks: each question's answer, correctness, time spent, attempt history
 */
export async function submitDetailedQuizAttempt(quizId, attemptData) {
  try {
    const userId = getUserId();
    const {
      mcqAnswers,
      tfAnswers,
      mcqQuestions,
      tfQuestions,
      questionTimes,
      totalTimeSpent,
      startTime,
      endTime
    } = attemptData;

    // Build detailed question analytics
    const mcqAnalytics = mcqQuestions.map((q, index) => {
      const userAnswer = mcqAnswers[q.id];
      const isCorrect = userAnswer === q.correct;
      return {
        questionId: q.id,
        questionIndex: index,
        questionText: q.question,
        questionType: 'mcq',
        options: q.options,
        correctAnswer: q.correct,
        correctAnswerText: q.options[q.correct],
        userAnswer: userAnswer !== undefined ? userAnswer : null,
        userAnswerText: userAnswer !== undefined ? q.options[userAnswer] : null,
        isCorrect,
        isAttempted: userAnswer !== undefined,
        timeSpent: questionTimes?.[`mcq_${q.id}`] || 0
      };
    });

    const tfAnalytics = tfQuestions.map((q, index) => {
      const userAnswer = tfAnswers[q.id];
      const isCorrect = userAnswer === q.correct;
      return {
        questionId: q.id,
        questionIndex: mcqQuestions.length + index,
        questionText: q.question,
        questionType: 'tf',
        correctAnswer: q.correct,
        userAnswer: userAnswer !== undefined ? userAnswer : null,
        isCorrect,
        isAttempted: userAnswer !== undefined,
        timeSpent: questionTimes?.[`tf_${q.id}`] || 0
      };
    });

    const allQuestionAnalytics = [...mcqAnalytics, ...tfAnalytics];

    // Calculate scores
    const mcqScore = mcqAnalytics.filter(q => q.isCorrect).length;
    const tfScore = tfAnalytics.filter(q => q.isCorrect).length;
    const totalScore = mcqScore + tfScore;
    const totalQuestions = mcqQuestions.length + tfQuestions.length;

    // Track attempted questions
    const mcqAttempted = mcqAnalytics.filter(q => q.isAttempted).length;
    const tfAttempted = tfAnalytics.filter(q => q.isAttempted).length;
    const totalAttempted = mcqAttempted + tfAttempted;
    const totalSkipped = totalQuestions - totalAttempted;

    // Calculate percentage based on total questions (not just attempted)
    const percentage = Math.round((totalScore / totalQuestions) * 100);
    // Also calculate accuracy (score out of attempted only)
    const accuracy = totalAttempted > 0 ? Math.round((totalScore / totalAttempted) * 100) : 0;

    // Get existing attempts for this quiz
    const attemptDocId = `${userId}_quiz_${quizId}`;
    const existingDoc = await getDoc(doc(db, 'quiz-analytics', attemptDocId));
    const existingData = existingDoc.exists() ? existingDoc.data() : null;
    const attemptNumber = (existingData?.totalAttempts || 0) + 1;

    // Create this attempt record
    const attemptRecord = {
      attemptNumber,
      timestamp: serverTimestamp(),
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      totalTimeSpent,
      mcqScore,
      tfScore,
      totalScore,
      totalQuestions,
      percentage,
      accuracy,
      // Attempted tracking
      mcqAttempted,
      mcqTotal: mcqQuestions.length,
      tfAttempted,
      tfTotal: tfQuestions.length,
      totalAttempted,
      totalSkipped,
      completionRate: Math.round((totalAttempted / totalQuestions) * 100),
      questions: allQuestionAnalytics
    };

    // Save individual attempt to subcollection
    const attemptSubDocId = `${attemptDocId}_attempt_${attemptNumber}`;
    await setDoc(doc(db, 'quiz-attempts', attemptSubDocId), {
      userId,
      quizId,
      ...attemptRecord
    });

    // Update or create main quiz analytics document
    const isNewBestScore = !existingData || percentage > (existingData.bestPercentage || 0);

    // Calculate question-wise analytics across all attempts
    const questionStats = {};
    allQuestionAnalytics.forEach(q => {
      const key = `${q.questionType}_${q.questionId}`;
      const existing = existingData?.questionStats?.[key] || { attempts: 0, correct: 0 };
      questionStats[key] = {
        questionId: q.questionId,
        questionType: q.questionType,
        questionText: q.questionText,
        attempts: existing.attempts + 1,
        correct: existing.correct + (q.isCorrect ? 1 : 0),
        accuracy: Math.round(((existing.correct + (q.isCorrect ? 1 : 0)) / (existing.attempts + 1)) * 100),
        totalTimeSpent: (existing.totalTimeSpent || 0) + q.timeSpent,
        averageTime: Math.round(((existing.totalTimeSpent || 0) + q.timeSpent) / (existing.attempts + 1))
      };
    });

    // Identify weak and strong areas
    const questionStatsArray = Object.values(questionStats);
    const weakQuestions = questionStatsArray
      .filter(q => q.accuracy < 50 && q.attempts >= 1)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 5);

    const strongQuestions = questionStatsArray
      .filter(q => q.accuracy >= 80 && q.attempts >= 1)
      .sort((a, b) => b.accuracy - a.accuracy)
      .slice(0, 5);

    await setDoc(doc(db, 'quiz-analytics', attemptDocId), {
      userId,
      quizId,
      totalAttempts: attemptNumber,
      firstAttemptAt: existingData?.firstAttemptAt || serverTimestamp(),
      lastAttemptAt: serverTimestamp(),

      // Best performance
      bestScore: isNewBestScore ? totalScore : (existingData?.bestScore || 0),
      bestPercentage: isNewBestScore ? percentage : (existingData?.bestPercentage || 0),
      bestAttemptNumber: isNewBestScore ? attemptNumber : (existingData?.bestAttemptNumber || 0),

      // Latest performance
      latestScore: totalScore,
      latestPercentage: percentage,
      latestAccuracy: accuracy,
      latestAttempted: totalAttempted,
      latestSkipped: totalSkipped,
      latestCompletionRate: Math.round((totalAttempted / totalQuestions) * 100),

      // Aggregated stats
      totalQuestionsAnswered: (existingData?.totalQuestionsAnswered || 0) + totalQuestions,
      totalCorrectAnswers: (existingData?.totalCorrectAnswers || 0) + totalScore,
      overallAccuracy: Math.round(
        (((existingData?.totalCorrectAnswers || 0) + totalScore) /
        ((existingData?.totalQuestionsAnswered || 0) + totalQuestions)) * 100
      ),

      // Time analytics
      totalTimeSpentAllAttempts: (existingData?.totalTimeSpentAllAttempts || 0) + totalTimeSpent,
      averageTimePerAttempt: Math.round(
        ((existingData?.totalTimeSpentAllAttempts || 0) + totalTimeSpent) / attemptNumber
      ),
      fastestAttemptTime: existingData?.fastestAttemptTime
        ? Math.min(existingData.fastestAttemptTime, totalTimeSpent)
        : totalTimeSpent,

      // Question-wise stats
      questionStats,
      weakQuestions,
      strongQuestions,

      // Score history for trend analysis
      scoreHistory: arrayUnion({
        attemptNumber,
        percentage,
        score: totalScore,
        timeSpent: totalTimeSpent,
        timestamp: new Date().toISOString()
      })
    }, { merge: true });

    // Update user's global stats
    await updateUserQuizStats(userId, {
      quizId,
      score: totalScore,
      totalQuestions,
      percentage,
      isNewBestScore,
      mcqCorrect: mcqScore,
      mcqTotal: mcqQuestions.length,
      tfCorrect: tfScore,
      tfTotal: tfQuestions.length
    });

    return {
      success: true,
      data: {
        attemptNumber,
        score: totalScore,
        totalQuestions,
        percentage,
        accuracy,
        mcqScore,
        tfScore,
        // Attempted tracking
        totalAttempted,
        totalSkipped,
        mcqAttempted,
        tfAttempted,
        completionRate: Math.round((totalAttempted / totalQuestions) * 100),
        isNewBestScore,
        bestPercentage: isNewBestScore ? percentage : (existingData?.bestPercentage || percentage),
        weakQuestions,
        strongQuestions,
        questionAnalytics: allQuestionAnalytics
      }
    };
  } catch (error) {
    console.error('Submit detailed quiz error:', error);

    // Handle offline errors gracefully
    if (error.message?.includes('offline') || error.code === 'unavailable' || !navigator.onLine) {
      // Save to local storage for later sync
      const offlineData = {
        quizId,
        attemptData,
        timestamp: Date.now()
      };
      saveToLocalStorage(`quiz_attempt_${quizId}`, offlineData);

      // Return the calculated results even when offline
      const mcqScore = attemptData.mcqQuestions.filter((q) =>
        attemptData.mcqAnswers[q.id] === q.correct
      ).length;
      const tfScore = attemptData.tfQuestions.filter((q) =>
        attemptData.tfAnswers[q.id] === q.correct
      ).length;
      const totalScore = mcqScore + tfScore;
      const totalQuestions = attemptData.mcqQuestions.length + attemptData.tfQuestions.length;
      const percentage = Math.round((totalScore / totalQuestions) * 100);
      const totalAttempted = Object.keys(attemptData.mcqAnswers).length + Object.keys(attemptData.tfAnswers).length;

      return {
        success: true,
        offline: true,
        data: {
          attemptNumber: 1,
          score: totalScore,
          totalQuestions,
          percentage,
          accuracy: totalAttempted > 0 ? Math.round((totalScore / totalAttempted) * 100) : 0,
          mcqScore,
          tfScore,
          totalAttempted,
          totalSkipped: totalQuestions - totalAttempted,
          mcqAttempted: Object.keys(attemptData.mcqAnswers).length,
          tfAttempted: Object.keys(attemptData.tfAnswers).length,
          completionRate: Math.round((totalAttempted / totalQuestions) * 100),
          isNewBestScore: false,
          bestPercentage: percentage,
          weakQuestions: [],
          strongQuestions: [],
          questionAnalytics: [],
          offlineMessage: 'Results saved locally. Will sync when online.'
        }
      };
    }

    return { success: false, error: error.message };
  }
}

/**
 * Update user's global quiz statistics
 */
async function updateUserQuizStats(userId, quizResult) {
  try {
    const statsDocId = `${userId}_stats`;
    const existingDoc = await getDoc(doc(db, 'user-quiz-stats', statsDocId));
    const existingData = existingDoc.exists() ? existingDoc.data() : null;

    const totalAttempts = (existingData?.totalQuizAttempts || 0) + 1;
    const totalQuestionsAnswered = (existingData?.totalQuestionsAnswered || 0) + quizResult.totalQuestions;
    const totalCorrect = (existingData?.totalCorrectAnswers || 0) + quizResult.score;

    await setDoc(doc(db, 'user-quiz-stats', statsDocId), {
      userId,
      totalQuizAttempts: totalAttempts,
      totalQuestionsAnswered,
      totalCorrectAnswers: totalCorrect,
      overallAccuracy: Math.round((totalCorrect / totalQuestionsAnswered) * 100),

      // MCQ specific stats
      mcqStats: {
        totalAttempted: (existingData?.mcqStats?.totalAttempted || 0) + quizResult.mcqTotal,
        totalCorrect: (existingData?.mcqStats?.totalCorrect || 0) + quizResult.mcqCorrect,
        accuracy: Math.round(
          (((existingData?.mcqStats?.totalCorrect || 0) + quizResult.mcqCorrect) /
          ((existingData?.mcqStats?.totalAttempted || 0) + quizResult.mcqTotal)) * 100
        )
      },

      // True/False specific stats
      tfStats: {
        totalAttempted: (existingData?.tfStats?.totalAttempted || 0) + quizResult.tfTotal,
        totalCorrect: (existingData?.tfStats?.totalCorrect || 0) + quizResult.tfCorrect,
        accuracy: Math.round(
          (((existingData?.tfStats?.totalCorrect || 0) + quizResult.tfCorrect) /
          ((existingData?.tfStats?.totalAttempted || 0) + quizResult.tfTotal)) * 100
        )
      },

      // Quizzes completed
      quizzesCompleted: existingData?.quizzesCompleted || [],
      uniqueQuizzes: [...new Set([...(existingData?.quizzesCompleted || []), quizResult.quizId])].length,

      lastUpdated: serverTimestamp()
    }, { merge: true });

    // Add quiz to completed list if not already there
    if (!existingData?.quizzesCompleted?.includes(quizResult.quizId)) {
      await updateDoc(doc(db, 'user-quiz-stats', statsDocId), {
        quizzesCompleted: arrayUnion(quizResult.quizId)
      });
    }
  } catch (error) {
    console.error('Update user stats error:', error);
  }
}

/**
 * Get detailed quiz analytics for a specific quiz
 */
export async function getQuizAnalytics(quizId) {
  try {
    const userId = getUserId();
    const docId = `${userId}_quiz_${quizId}`;

    const docSnapshot = await getDoc(doc(db, 'quiz-analytics', docId));

    if (docSnapshot.exists()) {
      return { success: true, data: docSnapshot.data() };
    }

    return { success: true, data: null };
  } catch (error) {
    console.error('Get quiz analytics error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get all quiz attempts for a specific quiz
 */
export async function getQuizAttemptHistory(quizId) {
  try {
    const userId = getUserId();

    const attemptsQuery = query(
      collection(db, 'quiz-attempts'),
      where('userId', '==', userId),
      where('quizId', '==', quizId),
      orderBy('attemptNumber', 'desc')
    );

    const snapshot = await getDocs(attemptsQuery);
    const attempts = snapshot.docs.map(doc => doc.data());

    return { success: true, data: attempts };
  } catch (error) {
    console.error('Get attempt history error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get user's global quiz statistics
 */
export async function getUserQuizStats() {
  try {
    const userId = getUserId();
    const statsDocId = `${userId}_stats`;

    const docSnapshot = await getDoc(doc(db, 'user-quiz-stats', statsDocId));

    if (docSnapshot.exists()) {
      return { success: true, data: docSnapshot.data() };
    }

    return {
      success: true,
      data: {
        totalQuizAttempts: 0,
        totalQuestionsAnswered: 0,
        totalCorrectAnswers: 0,
        overallAccuracy: 0,
        mcqStats: { totalAttempted: 0, totalCorrect: 0, accuracy: 0 },
        tfStats: { totalAttempted: 0, totalCorrect: 0, accuracy: 0 },
        uniqueQuizzes: 0
      }
    };
  } catch (error) {
    console.error('Get user quiz stats error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get performance trend data for charts
 */
export async function getPerformanceTrend(quizId = null) {
  try {
    const userId = getUserId();

    if (quizId) {
      // Get trend for specific quiz
      const docId = `${userId}_quiz_${quizId}`;
      const docSnapshot = await getDoc(doc(db, 'quiz-analytics', docId));

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        return {
          success: true,
          data: {
            scoreHistory: data.scoreHistory || [],
            improvement: calculateImprovement(data.scoreHistory || [])
          }
        };
      }
    } else {
      // Get overall trend across all quizzes
      const analyticsQuery = query(
        collection(db, 'quiz-analytics'),
        where('userId', '==', userId)
      );

      const snapshot = await getDocs(analyticsQuery);
      const allScoreHistory = [];

      snapshot.forEach(doc => {
        const data = doc.data();
        if (data.scoreHistory) {
          allScoreHistory.push(...data.scoreHistory.map(h => ({
            ...h,
            quizId: data.quizId
          })));
        }
      });

      // Sort by timestamp
      allScoreHistory.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

      return {
        success: true,
        data: {
          scoreHistory: allScoreHistory,
          improvement: calculateImprovement(allScoreHistory)
        }
      };
    }

    return { success: true, data: { scoreHistory: [], improvement: 0 } };
  } catch (error) {
    console.error('Get performance trend error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Calculate improvement percentage
 */
function calculateImprovement(scoreHistory) {
  if (scoreHistory.length < 2) return 0;

  const firstScore = scoreHistory[0].percentage;
  const lastScore = scoreHistory[scoreHistory.length - 1].percentage;

  return lastScore - firstScore;
}

/**
 * Get weak areas that need improvement
 */
export async function getWeakAreas() {
  try {
    const userId = getUserId();

    const analyticsQuery = query(
      collection(db, 'quiz-analytics'),
      where('userId', '==', userId)
    );

    const snapshot = await getDocs(analyticsQuery);
    const allWeakQuestions = [];

    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.weakQuestions) {
        allWeakQuestions.push(...data.weakQuestions.map(q => ({
          ...q,
          quizId: data.quizId
        })));
      }
    });

    // Sort by accuracy (lowest first)
    allWeakQuestions.sort((a, b) => a.accuracy - b.accuracy);

    return { success: true, data: allWeakQuestions.slice(0, 10) };
  } catch (error) {
    console.error('Get weak areas error:', error);
    return { success: false, error: error.message };
  }
}
