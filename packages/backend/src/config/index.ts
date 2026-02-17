import dotenv from 'dotenv';

dotenv.config();

interface Config {
  env: string;
  port: number;
  cors: {
    origin: string | string[];
  };
  api: {
    prefix: string;
  };
}

const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  if (!value && !defaultValue) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || defaultValue!;
};

export const config: Config = {
  env: getEnv('NODE_ENV', 'development'),
  port: parseInt(getEnv('PORT', '3001'), 10),
  cors: {
    origin:
      getEnv('NODE_ENV', 'development') === 'production'
        ? getEnv('CORS_ORIGIN', 'http://localhost:3000').split(',')
        : getEnv('CORS_ORIGIN', 'http://localhost:3000'),
  },
  api: {
    prefix: '/api',
  },
};
