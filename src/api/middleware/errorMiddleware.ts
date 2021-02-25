/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { errorManager } from '../../services/errorManager';

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // TODO: if specyfic err.name eg. === 'JsonWebTokenError occur than map this to AppError istance before handle it by errorManager
  errorManager(err, res);
};
