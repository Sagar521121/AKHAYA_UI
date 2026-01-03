import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi } from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  signout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const initAuth = async () => {
      try {
        if (authApi.isAuthenticated()) {
          console.log('Auth token found, fetching user...');
          const currentUser = await authApi.getUser();
          if (currentUser) {
            console.log('User authenticated:', currentUser.email);
            setUser(currentUser);
          } else {
            console.log('Failed to fetch user, token might be invalid');
          }
        } else {
          console.log('No auth token found');
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        authApi.signout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const signin = async (email: string, password: string) => {
    try {
      const data = await authApi.signin(email, password);
      setUser(data.user);
    } catch (error) {
      console.error('Signin error:', error);
      throw error;
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      const data = await authApi.signup(email, password, name);
      setUser(data.user);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const signout = () => {
    authApi.signout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signup,
        signout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}