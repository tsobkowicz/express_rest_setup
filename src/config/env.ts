import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const PROD = process.env.NODE_ENV === 'production';

export const { TEST_ENV } = process.env;

export const CORS_ORIGIN = PROD
  ? process.env.CORS_ORIGIN
  : 'http://localhost:5000';

export const PORT = parseInt(process.env.PORT, 10) || 5000;
