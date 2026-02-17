import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export class CustomError extends Error implements AppError {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Log error
  if (config.env !== 'test') {
    console.error('Error:', {
      message,
      statusCode,
      stack: config.env === 'development' ? err.stack : undefined,
      path: req.path,
      method: req.method,
    });
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(config.env === 'development' && { stack: err.stack }),
    },
  });
};
