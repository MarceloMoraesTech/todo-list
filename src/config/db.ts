import { Pool, Client }  from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_list',
    password: '647484',
    port: 5432,
  })
/*  
pool.query('SELECT * FROM TASK', (err, res) => {
    console.log(err, res)
  })
*/
