import express, { RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandlers';

const app = express();

app.use(express.json());

const requestMiddleWare: RequestHandler = (req, res , next) => {
    console.log(`${req.method}, ${req.path} - body: ${req.body}`);
    next();
};


app.use(requestMiddleWare);

app.get('/', (req, res) =>{
    res.send('hi!!!1234');
});

app.get('/posts', listPostHandler);
app.post('/posts', createPostHandler);


app.listen(3000, () =>  {
    console.log('server running at 30000')
});