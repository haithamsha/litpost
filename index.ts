import express, { RequestHandler } from 'express';

const app = express();

app.use(express.json());


const posts: any[] = [];

const requestMiddleWare: RequestHandler = (req, res , next) => {
    console.log(`New Request', ${req.path} - body: ${req.body}`);
    next();
};


app.use(requestMiddleWare);

app.use((req, res, next) => {
    console.log(Date.now());
    next();
});

app.get('/', (req, res) =>{
    res.send('hi!!!1234');
});

app.get('/posts', (req, res) =>{
    res.send({ posts });
});

app.post('/posts', (req, res) =>{
    const post = req.body;
    res.sendStatus(200);
    posts.push(post);
});


app.listen(3000, () =>  {
    console.log('server running at 30000')
});