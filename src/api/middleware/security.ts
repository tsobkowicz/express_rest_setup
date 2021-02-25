import { Router } from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export const handleSecurity = (app: Router) => {
  const limiter = rateLimit({
    max: 100, // limit each IP to 100 requests per windowMs
    windowMs: 2 * 60 * 1000, // 2 mins, the timeframe for which requests are checked/remembered.
    message: 'Too many requests',
  });
  app.use(limiter);

  app.use(helmet());
};
