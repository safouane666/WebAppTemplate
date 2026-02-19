'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/lib/auth/api';
import type { User } from '@/types/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (token: string, refreshToken: string, user: User) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const login = useCallback((token: string, refreshToken: string, userData: User) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
    }
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    authApi.logout();
    setUser(null);
    router.push('/auth/login');
  }, [router]);

  const refreshUser = useCallback(async () => {
    try {
      const { user: userData } = await authApi.getCurrentUser();
      setUser(userData);
    } catch (error) {
      // If getting user fails, clear auth state
      logout();
    }
  }, [logout]);

  useEffect(() => {
    // Check if user is authenticated on mount
    const checkAuth = async () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
          try {
            await refreshUser();
          } catch (error) {
            // Token might be invalid, clear it
            authApi.logout();
          }
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [refreshUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        refreshUser,
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
