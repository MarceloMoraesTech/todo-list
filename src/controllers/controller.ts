import { pool } from "../config/db"

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
        response.end()
        }
    }
    )}

export const updateTask = (request:any,response:any) => {
    pool.query(`update task set description = '${request.body.description}', duedate = '${request.body.duedate}', status = '${request.body.status}', list = '${request.body.list}' where id = '${request.params.id}'`,
    (error,results) =>{
        if(error){
            response.status(404).send(`O id: ${request.params.id} não existe`)  
        } 
        else{
            response.status(200).json({'message':'Sucesso','body':request.body})
        }
    }
    )}
 
export const deleteTask = (request:any,response:any) =>{
    pool.query(`delete from task where id = '${request.params.id}'` , (error, results) => {
        
        if (error) {
            response.status(404).send(`O id: ${request.params.id} não existe`)  
        }
        else {
            response.status(200).json({'message':'Deletado com Sucesso'})
        }     
        })
}

export const getAllTasksOrdered = (request:any, response:any) => {
    pool.query('SELECT * FROM task order by duedate', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
    }