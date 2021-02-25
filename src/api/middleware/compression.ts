import { Router } from 'express';
import compression from 'compression';

export const handleCompression = (app: Router) => {
  app.use(compression());
};
