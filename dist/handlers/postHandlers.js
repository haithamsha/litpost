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
exports.createPostHandler = exports.listPostHandler = void 0;
const datastore_1 = require("../datastore");
const crypto_1 = __importDefault(require("crypto"));
const listPostHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ posts: yield datastore_1.db.listPosts() });
});
exports.listPostHandler = listPostHandler;
const createPostHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.title || !req.body.url || !req.body.userId)
        return res.sendStatus(400);
    // TODO get user id from session
    // TODO validate title and url 
    // validate url is new otherwise add +1 to existing post
    const post = {
        id: crypto_1.default.randomUUID(),
        postedAt: Date.now(),
        title: req.body.title,
        url: req.body.url,
        userId: req.body.userId
    };
    yield datastore_1.db.createPost(post);
    console.log(datastore_1.db.listPosts());
    res.sendStatus(200);
});
exports.createPostHandler = createPostHandler;
