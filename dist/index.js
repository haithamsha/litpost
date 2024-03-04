"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postHandlers_1 = require("./handlers/postHandlers");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const datastore_1 = require("./datastore");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, datastore_1.initDb)();
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    const requestMiddleWare = (req, res, next) => {
        console.log(req.method, req.path, '_ body:', req.body);
        next();
    };
    app.use(requestMiddleWare);
    app.get('/v1/posts', (0, express_async_handler_1.default)(postHandlers_1.listPostHandler));
    app.post('/v1/posts', (0, express_async_handler_1.default)(postHandlers_1.createPostHandler));
    const errorHandler = (err, req, res, next) => {
        console.error('Uncaught exception:', err);
        return res.status(500).send('Opps, an unexpected error occured, please try again later.');
    };
    app.use(errorHandler);
    app.listen(3000, () => {
        console.log('server running at 3000');
    });
}))();
