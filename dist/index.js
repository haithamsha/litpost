"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postHandlers_1 = require("./handlers/postHandlers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const requestMiddleWare = (req, res, next) => {
    console.log(req.method, req.path, '_ body:', req.body);
    next();
};
app.use(requestMiddleWare);
app.get('/', (req, res) => {
    res.send('hi!!!1234');
});
app.get('/v1/posts', postHandlers_1.listPostHandler);
app.post('/v1/posts', postHandlers_1.createPostHandler);
const errorHandler = (err, req, res, next) => {
    console.error('Uncaught exception:', err);
    return res.status(500).send('Opps, an unexpected error occured, please try again later.');
};
app.use(errorHandler);
app.listen(3000, () => {
    console.log('server running at 30000');
});
