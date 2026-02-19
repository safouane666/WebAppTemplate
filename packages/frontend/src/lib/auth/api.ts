import { apiClient } from '@/lib/api';
import type { LoginRequest, RegisterRequest, AuthResponse } from '@/types/auth';

export const authApi = {
  /**
   * Register a new user
   */
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/register', data);
    return response.data;
  },

  /**
   * Login user
   */
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  },

  /**
   * Get current user
   */
  getCurrentUser: async (): Promise<{ user: AuthResponse['user'] }> => {
    const response = await apiClient.get<{ user: AuthResponse['user'] }>('/auth/me');
    return response.data;
  },

  /**
   * Logout (client-side only - clears tokens)
   */
  logout: () => {
    // Clear tokens from storage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    }
  },
};
