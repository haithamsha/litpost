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
const authHandler_1 = require("./handlers/authHandler");
const loggerMiddleware_1 = require("./middleware/loggerMiddleware");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const dotenv_1 = __importDefault(require("dotenv"));
const authMiddleware_1 = require("./middleware/authMiddleware");
(() => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
    yield (0, datastore_1.initDb)();
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(loggerMiddleware_1.loggerMiddleWare);
    app.get("/healthz", (req, res) => {
        res.send({ status: "✌️" });
    });
    app.post('/v1/signup', (0, express_async_handler_1.default)(authHandler_1.signUpHandler));
    app.post('/v1/signin', (0, express_async_handler_1.default)(authHandler_1.signInHandler));
    app.use(authMiddleware_1.authMiddleware);
    app.get('/v1/posts', (0, express_async_handler_1.default)(postHandlers_1.listPostHandler));
    app.post('/v1/posts', (0, express_async_handler_1.default)(postHandlers_1.createPostHandler));
    app.use(errorMiddleware_1.errorHandler);
    app.listen(process.env.PORT || 3000, () => {
        console.log('server running at 3000');
    });
}))();
