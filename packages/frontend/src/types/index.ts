// Shared types for the frontend
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    stack?: string;
  };
}

export interface HealthCheckResponse {
  status: string;
  timestamp: string;
  uptime: number;
  environment: string;
}
