"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleWare = void 0;
const loggerMiddleWare = (req, res, next) => {
    console.log(req.method, req.path, '_ body:', req.body);
    next();
};
exports.loggerMiddleWare = loggerMiddleWare;
