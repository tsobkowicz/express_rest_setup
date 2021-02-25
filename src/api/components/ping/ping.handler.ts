import { Request, Response } from 'express';

export const ping = (_req: Request, res: Response) => {
  res.status(200).json({ data: 'Pong!' });
};

export const foo = (req: Request, res: Response) => {
  const { data } = req.body;
  res.status(200).json({ foo: data });
};
