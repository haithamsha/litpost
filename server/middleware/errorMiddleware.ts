import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err , req, res, next) => {
    console.error('Uncaught exception:', err);
    return res.status(500).send('Opps, an unexpected error occured, please try again later.');
};