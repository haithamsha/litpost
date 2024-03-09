import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandlers';
import asyncHandler from 'express-async-handler';
import { initDb } from './datastore';
import { signInHandler, signUpHandler } from './handlers/authHandler';
import { loggerMiddleWare } from './middleware/loggerMiddleware';
import { errorHandler } from './middleware/errorMiddleware';
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/authMiddleware';

(async () => {

    dotenv.config();

    await initDb();
    const app = express();

    app.use(express.json());

    app.use(loggerMiddleWare);
    
    app.get("/healthz", (req, res) => {
        res.send({status: "✌️"});
    })

    app.post('/v1/signup', asyncHandler(signUpHandler));
    app.post('/v1/signin', asyncHandler(signInHandler));

    app.use(authMiddleware);

    app.get('/v1/posts', asyncHandler(listPostHandler));
    app.post('/v1/posts', asyncHandler(createPostHandler));

    app.use(errorHandler);

    app.listen(process.env.PORT || 3000, () =>  {
        console.log(`server running at ${process.env.PORT || 3000}`)
    });
})();