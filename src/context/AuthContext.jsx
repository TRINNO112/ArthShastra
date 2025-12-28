// Authentication Context for ArthShastra
import { createContext, useContext, useState, useEffect } from 'react';
import {
  auth,
  onAuthChange,
  signInWithGoogle,
  signOutUser,
  getUserId
} from '../services/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthChange((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
          isAnonymous: false
        });
      } else {
        // Set anonymous user
        const anonymousId = getUserId();
        setUser({
          uid: anonymousId,
          name: 'Guest User',
          email: null,
          photoURL: null,
          isAnonymous: true
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
    const result = await signOutUser();
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
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
