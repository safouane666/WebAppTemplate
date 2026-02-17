// Shared types between frontend and backend

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    stack?: string;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface HealthCheck {
  status: 'ok' | 'error';
  timestamp: string;
  uptime: number;
  environment: string;
}
