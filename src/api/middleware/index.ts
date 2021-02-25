import { handleBodyRequestParsing } from './bodyRequestParsing';
import { handleCompression } from './compression';
import { handleCors } from './cors';
import { handleSecurity } from './security';
import { notFound } from './notFound';
import { errorMiddleware } from './errorMiddleware';
import { handleLogging } from './handleLogging';

export {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleSecurity,
  handleLogging,
  notFound,
  errorMiddleware,
};
