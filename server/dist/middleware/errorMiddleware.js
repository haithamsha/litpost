"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error('Uncaught exception:', err);
    return res.status(500).send('Opps, an unexpected error occured, please try again later.');
};
exports.errorHandler = errorHandler;
