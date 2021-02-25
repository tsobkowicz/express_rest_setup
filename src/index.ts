import http from 'http';
import app from './api/app';
import { logger } from './config/logger';
import { PORT } from './config/env';

logger.info(process.env.NODE_ENV);

process.on('uncaughtException', (err) => {
  logger.error({
    message: 'uncaughtException occured',
    error: err,
  });
  process.exit(1);
});

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`server is listening on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  logger.error({
    message: 'unhandledRejection occured',
    error: err,
  });
  server.close(() => {
    // TODO: close db connection
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  logger.warn('SIGTERM signal received');
  logger.info('Closing http server');
  server.close(() => {
    logger.info('Http server closed');
    // TODO: close db connection
    process.exit(1);
  });
});

process.on('SIGINT', () => {
  logger.warn('SIGINT signal received');
  logger.info('Closing http server');
  server.close(() => {
    logger.info('Http server closed');
    // TODO: close db connection
    process.exit(1);
  });
});
