import { Router } from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';

export const handleLogging = (app: Router) => {
  app.use(
    expressWinston.logger({
      // msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} IP {{req.ip}}',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.splat(),
        winston.format.printf((info) => {
          const { timestamp, level, message } = info;

          return `${timestamp} [${level}]: ${message}`;
        })
      ),
      expressFormat: true,
      transports: [
        new winston.transports.Console({ handleExceptions: true }),
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
      ],
    })
  );
};
