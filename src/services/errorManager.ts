import { Response } from 'express';
import { logger } from '../config/logger';
import { AppError } from '../utils/AppError';

export const isTrusted = (err: Error) => {
  if (err instanceof AppError) {
    return err.isOperational;
  }
  return false;
};

// TODO: add logger, send email to admin and send to sentry
export const errorManager = (err: Error, res: Response) => {
  if (isTrusted(err) && err instanceof AppError) {
    const { message, statusCode } = err;
    logger.warn({ message });
    return res.status(statusCode).json({ error: message });
  }
  if (process.env.NODE_ENV === 'production') {
    logger.error({ message: 'Unknow Error', error: err.stack });
    return res.status(500).json({ error: 'Internal Server Error' });
  }
  logger.debug({ message: 'Unknow Error', error: err.stack });
  return res.status(500).json({ error: err.stack });
};
