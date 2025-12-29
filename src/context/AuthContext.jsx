// Authentication Context for ArthShastra
import { createContext, useContext, useState, useEffect } from 'react';
import {
  auth,
  db,
  onAuthChange,
  signInWithGoogle,
  signOutUser,
  getUserId,
  logUserActivity,
  updateUserStats
} from '../services/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch comprehensive user data from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          const userData = userDoc.exists() ? userDoc.data() : {};
          const profile = userData.profile || {};
          const stats = userData.stats || {};

          setUser({
            // Auth data
            uid: firebaseUser.uid,
            isAnonymous: false,

            // Basic info from Google
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL,
            emailVerified: firebaseUser.emailVerified,

            // Profile data from Firestore
            displayName: profile.displayName || firebaseUser.displayName,
            className: profile.className || '',
            board: profile.board || '',
            school: profile.school || '',
            city: profile.city || '',
            state: profile.state || '',
            targetScore: profile.targetScore || '',
            studyHoursPerDay: profile.studyHoursPerDay || '',
            preferredLanguage: profile.preferredLanguage || 'English',
            examYear: profile.examYear || new Date().getFullYear() + 1,
            phone: profile.phone || '',
            parentPhone: profile.parentPhone || '',
            dateOfBirth: profile.dateOfBirth || '',
            gender: profile.gender || '',

            // Stats
            stats: {
              lessonsCompleted: stats.lessonsCompleted || 0,
              lessonsStarted: stats.lessonsStarted || 0,
              quizzesTaken: stats.quizzesTaken || 0,
              quizzesPassed: stats.quizzesPassed || 0,
              totalQuestionsAttempted: stats.totalQuestionsAttempted || 0,
              totalCorrectAnswers: stats.totalCorrectAnswers || 0,
              totalTimeSpent: stats.totalTimeSpent || 0,
              averageScore: stats.averageScore || 0,
              bestScore: stats.bestScore || 0,
              currentStreak: stats.currentStreak || 0,
              longestStreak: stats.longestStreak || 0
            },

            // Metadata
            createdAt: userData.createdAt?.toDate?.() || null,
            lastLogin: userData.lastLogin?.toDate?.() || null,
            loginCount: userData.loginCount || 1,
            achievements: userData.achievements || [],
            recentActivity: userData.recentActivity || [],

            // Profile completion
            isProfileComplete: Boolean(
              profile.className &&
              profile.board &&
              profile.school
            )
          });
        } catch (err) {
          console.error('Error fetching user data:', err);
          setUser({
            uid: firebaseUser.uid,
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL,
            isAnonymous: false,
            isProfileComplete: false,
            stats: {}
          });
        }
      } else {
        // Set anonymous user
        const anonymousId = getUserId();
        setUser({
          uid: anonymousId,
          name: 'Guest User',
          email: null,
          photoURL: null,
          isAnonymous: true,
          isProfileComplete: false,
          stats: {}
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    setError(null);
    const result = await signInWithGoogle();
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  const logout = async () => {
    setError(null);

    // Log logout activity before signing out
    if (user && !user.isAnonymous) {
      await logUserActivity(user.uid, 'logout', {});
    }

    const result = await signOutUser();
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  const updateUserProfile = async (profileData) => {
    if (!user || user.isAnonymous) return { success: false, error: 'Not authenticated' };

    try {
      // Prepare comprehensive profile update
      const profileUpdate = {
        displayName: profileData.displayName || user.name,
        className: profileData.className || '',
        board: profileData.board || '',
        school: profileData.school || '',
        city: profileData.city || '',
        state: profileData.state || '',
        targetScore: profileData.targetScore || '',
        studyHoursPerDay: profileData.studyHoursPerDay || '',
        preferredLanguage: profileData.preferredLanguage || 'English',
        examYear: profileData.examYear || new Date().getFullYear() + 1,
        phone: profileData.phone || '',
        parentPhone: profileData.parentPhone || '',
        dateOfBirth: profileData.dateOfBirth || '',
        gender: profileData.gender || ''
      };

      await setDoc(doc(db, 'users', user.uid), {
        profile: profileUpdate,
        email: user.email,
        photoURL: user.photoURL,
        profileUpdatedAt: serverTimestamp()
      }, { merge: true });

      // Log profile update activity
      await logUserActivity(user.uid, 'profile_update', {
        fieldsUpdated: Object.keys(profileData)
      });

      // Update local state
      setUser(prev => ({
        ...prev,
        ...profileUpdate,
        isProfileComplete: Boolean(
          profileUpdate.className &&
          profileUpdate.board &&
          profileUpdate.school
        )
      }));

      return { success: true };
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Function to refresh user data from Firebase
  const refreshUserData = async () => {
    if (!user || user.isAnonymous) return;

    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const profile = userData.profile || {};
        const stats = userData.stats || {};

        setUser(prev => ({
          ...prev,
          ...profile,
          stats,
          achievements: userData.achievements || [],
          recentActivity: userData.recentActivity || []
        }));
      }
    } catch (err) {
      console.error('Error refreshing user data:', err);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    updateUserProfile,
    refreshUserData,
    updateUserStats: (statsUpdate) => updateUserStats(user?.uid, statsUpdate),
    logActivity: (type, details) => user?.uid ? logUserActivity(user.uid, type, details) : null,
    isAuthenticated: user && !user.isAnonymous
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
