import { Router } from 'express';
import cors from 'cors';
import { CORS_ORIGIN } from '../../config/env';

export const handleCors = (app: Router) => {
  app.use(
    cors({
      origin: CORS_ORIGIN,
    })
  );
};
