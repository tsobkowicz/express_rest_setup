import { Router } from 'express';
import { notFound } from './middleware';
import ping from './components/ping/ping.routes';

export default (app: Router) => {
  app.use('/api', ping);

  app.use(notFound);
};
