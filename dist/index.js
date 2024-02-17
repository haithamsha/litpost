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
    console.log(`${req.method}, ${req.path} - body: ${req.body}`);
    next();
};
app.use(requestMiddleWare);
app.get('/', (req, res) => {
    res.send('hi!!!1234');
});
app.get('/posts', postHandlers_1.listPostHandler);
app.post('/posts', postHandlers_1.createPostHandler);
app.listen(3000, () => {
    console.log('server running at 30000');
});
