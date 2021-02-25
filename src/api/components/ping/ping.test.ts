import request from 'supertest';
import express, { Router } from 'express';
import router from './ping.routes';
import { handleBodyRequestParsing } from '../../middleware';

describe('Test ping handler', () => {
  let app: Router;

  beforeEach(() => {
    app = express();
    handleBodyRequestParsing(app);
    app.use('/', router);
  });

  test('req /ping should return Pong!', async () => {
    const result = await request(app).get('/ping').send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe('Pong!');
  });

  test('req /foo with { "data": "bar" } should return { "foo": "bar" }', async () => {
    const result = await request(app).post('/foo').send({ data: 'bar' });

    expect(result.status).toBe(200);
    expect(result.body.foo).toBe('bar');
  });
});
