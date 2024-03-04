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
exports.SqlDataStore = void 0;
const sqlite_1 = require("sqlite");
const sqlite3_1 = __importDefault(require("sqlite3"));
const path_1 = __importDefault(require("path"));
class SqlDataStore {
    openDb() {
        return __awaiter(this, void 0, void 0, function* () {
            // open database
            const db = yield (0, sqlite_1.open)({
                filename: path_1.default.join(__dirname, 'codesquare.sqlite'),
                driver: sqlite3_1.default.Database
            });
            yield db.migrate({
                migrationsPath: path_1.default.join(__dirname, "migrations")
            });
            return this;
        });
    }
    createComment(comment) {
        throw new Error("Method not implemented.");
    }
    listComment(postId) {
        throw new Error("Method not implemented.");
    }
    deleteComment(id) {
        throw new Error("Method not implemented.");
    }
    createLike(like) {
        throw new Error("Method not implemented.");
    }
    listPosts() {
        throw new Error("Method not implemented.");
    }
    createPost(post) {
        throw new Error("Method not implemented.");
    }
    getPost(id) {
        throw new Error("Method not implemented.");
    }
    deletePost(id) {
        throw new Error("Method not implemented.");
    }
    createUser(user) {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email) {
        throw new Error("Method not implemented.");
    }
    getUserByUserName(userName) {
        throw new Error("Method not implemented.");
    }
}
exports.SqlDataStore = SqlDataStore;
