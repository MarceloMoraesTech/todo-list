"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = exports.getAllTasks = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_list',
    password: '647484',
    port: 5432,
});
pool.query('SELECT * FROM TASK', (err, res) => {
    console.log(err, res);
});
const getAllTasks = (request, response) => {
    pool.query('SELECT * FROM task', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
exports.getAllTasks = getAllTasks;
const getTaskById = (request, response) => {
    pool.query('SELECT * FROM task', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
exports.getTaskById = getTaskById;
