import { Pool, Client }  from 'pg';

const pool = new Pool({
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
export const getAllTasks = (request:any, response:any) => {
pool.query('SELECT * FROM task', (error, results) => {
    if (error) {
    throw error
    }
    response.status(200).json(results.rows)
})
}

export const getTaskById = (request:any, response:any) => {

  pool.query(`select * from task where id = '${request.params.id}'` , (error, results) => {
      
    if (error) {
        response.status(404).send(`O id: ${request.params.id} não existe`)  
    }
    else {
      response.status(200).json(results.rows)
    }     
  })
}

export const postTask = (request:any, response:any) => {

  pool.query(`INSERT INTO TASK (description, duedate, status, list)
  VALUES ('${request.body.description}', '${request.body.duedate}', '${request.body.status}', '${request.body.list}');` ,

    (error, results) => {
      
      if (error) {
        response.status(400).send(`Erro na conexão com o banco de dados`)  
      }
      else {
        response.status(201)
      }
    }
  )}
