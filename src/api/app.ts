import express from 'express';
import routes from './routes';
import {
  handleCors,
  handleBodyRequestParsing,
  handleSecurity,
  handleCompression,
  handleLogging,
  errorMiddleware,
} from './middleware';

const app = express();

app.enable('trust proxy');

handleCors(app);
handleSecurity(app);
handleBodyRequestParsing(app);
handleCompression(app);
handleLogging(app);

routes(app);

app.use(errorMiddleware);

export default app;
