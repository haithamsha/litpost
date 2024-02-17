"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const datastore_1 = require("./datastore");
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
app.get('/posts', (req, res) => {
    res.send({ posts: datastore_1.db.listPosts() });
});
app.post('/posts', (req, res) => {
    const post = req.body;
    res.sendStatus(200);
    datastore_1.db.createPost(post);
});
app.listen(3000, () => {
    console.log('server running at 30000');
});
