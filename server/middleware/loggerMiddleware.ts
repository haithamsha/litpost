import { RequestHandler } from "express";

export const loggerMiddleWare: RequestHandler = (req, res , next) => {
    console.log(req.method, req.path, '_ body:', req.body);
    next();
};