import express, { RequestHandler } from 'express';
import { db } from './datastore';

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

app.get('/posts', (req, res) =>{
    res.send({ posts: db.listPosts() });
});

app.post('/posts', (req, res) =>{
    const post = req.body;
    res.sendStatus(200);
    db.createPost(post);
});


app.listen(3000, () =>  {
    console.log('server running at 30000')
});