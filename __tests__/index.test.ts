import request from 'supertest';
import app from '../src/index';

describe('Test index.ts', () => {
  test('Catch-all route', async () => {
    const res = await request(app).get('/api/');
    expect(res.body).toEqual({ message: 'Hello World' });
  });
  test('Test getAllTasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.body).toBeDefined();
  });
  test('Test getAllTasks length', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.body.length).toBe(6);
  });
});
