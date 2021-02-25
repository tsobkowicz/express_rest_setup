import { Request, Response } from 'express';

export const notFound = (req: Request, res: Response) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server`);
};
