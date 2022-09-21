import { Pool, Client } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_list',
  password: 'Weare138.',
  port: 1234,
});
