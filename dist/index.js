"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const db_2 = require("./config/db");
const body_parser_1 = __importDefault(require("body-parser"));
const port = 5000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.get('/', (_req, res) => {
    //res.end('Hello Marcelo!');
});
app.get('/tasks', db_1.getAllTasks);
app.get('/tasks', db_2.getTaskById);
app.listen(port, () => {
    /* if (err) throw err; */
    console.log(`Ready on port ${port}`);
});
