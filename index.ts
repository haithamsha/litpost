import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandlers';
import asyncHandler from 'express-async-handler';
import { initDb } from './datastore';

(async () => {
    await initDb();
    const app = express();

    app.use(express.json());

    const requestMiddleWare: RequestHandler = (req, res , next) => {
        console.log(req.method, req.path, '_ body:', req.body);
        next();
    };


    app.use(requestMiddleWare);

    app.get('/', (req, res) =>{
        res.send('hi!!!1234');
    });

    app.get('/v1/posts', asyncHandler(listPostHandler));
    app.post('/v1/posts', asyncHandler(createPostHandler));



    const errorHandler: ErrorRequestHandler = (err , req, res, next) => {
        console.error('Uncaught exception:', err);
        return res.status(500).send('Opps, an unexpected error occured, please try again later.');
    };

    app.use(errorHandler);

    app.listen(3000, () =>  {
        console.log('server running at 30000')
    });
})