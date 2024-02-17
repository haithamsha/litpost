"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostHandler = exports.listPostHandler = void 0;
const datastore_1 = require("../datastore");
const crypto_1 = __importDefault(require("crypto"));
const listPostHandler = (req, res) => {
    res.send({ posts: datastore_1.db.listPosts() });
};
exports.listPostHandler = listPostHandler;
const createPostHandler = (req, res) => {
    const post = {
        id: crypto_1.default.randomUUID(),
        postedAt: Date.now(),
        title: req.body.title,
        url: req.body.url,
        userId: req.body.userId
    };
    datastore_1.db.createPost(post);
    res.sendStatus(200);
};
exports.createPostHandler = createPostHandler;
