// Auth-related types
export interface User {
  id: number;
  email: string;
  phone: string;
  full_name: string;
  role: string;
  created_at: string;
}

export interface AuthResponse {
  message: string;
  user: User;
  token: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  phone: string;
  password: string;
  full_name: string;
}

export interface AuthError {
  message: string;
  errors?: Record<string, string[]>;
}
