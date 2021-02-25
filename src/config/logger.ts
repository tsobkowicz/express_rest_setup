import winston from 'winston';

export const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.splat(),
    winston.format.printf((info) => {
      const { timestamp, level, message, ...meta } = info;

      return `${timestamp} [${level}]: ${message} ${
        Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
      }`;
    })
  ),
  transports: [
    new winston.transports.Console({ handleExceptions: true }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
  ],
});
