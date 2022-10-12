import request from  'supertest'
import app from '../src/index'
//import {app,test} from '../src/index'

describe('test index.ts', () => {
    test('test get route', async () => {
        const response = await request(app).get('/api/')
        expect(response.body).toEqual({message:'Hello World!'})
    })

    test('test get getTaskById', async () => {
        const id = '8ff2e16d-3518-4767-84b6-71e779ee640a'
        const response = await request(app).get(`/api/tasks/${id}`)
        expect(response.body).toEqual([
        {
            "id": "8ff2e16d-3518-4767-84b6-71e779ee640a",
            "description": "updateUnitTest",
            "createdat": "2022-08-31T03:00:00.000Z",
            "duedate": "2022-10-06T03:00:00.000Z",
            "status": "todo                ",
            "list": "pessoal"
        }
        ])
    })

    test('test post task', async() =>{
        const newTask = {
            description: "unitTest",
            duedate: "2022-10-05",
            status: "todo",
            list: "teste"
        }
        const response = await request(app).post(`/api/task`).send(newTask)
        expect(response.statusCode).toBeDefined()

    })

    test('test UpdateTask', async()=> {
        const id = 'abe2a936-7942-4d70-a6c0-29e2573f4b7e'
        const updateTask = {
            description: "updateTeste",
            duedate: "2022-10-07",
            status: "todo",
            list: "pessoal"
        }
        
        const response = await request(app).put(`/api/tasks/${id}`).send(updateTask)
        expect(response.body).toEqual({'message':'Sucesso','body':updateTask})
    })

    test('test delete task', async()=> {
        const id = '46cee699-a244-4a38-a10c-4f06c4c28a71'
        
        const response = await request(app).delete(`/api/tasks/${id}`)
        expect(response.body).toEqual({'message':'Deletado com Sucesso'})
        
    })
})