import express, { Router } from 'express';

export const handleBodyRequestParsing = (app: Router) => {
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));
};
