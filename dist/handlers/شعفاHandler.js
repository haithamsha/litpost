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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpHandler = exports.signInHandler = void 0;
const datastore_1 = require("../datastore");
const signInHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, password } = req.body;
    if (!login || !password)
        return res.sendStatus(400);
    const existing = (yield datastore_1.db.getUserByEmail(login)) || (yield datastore_1.db.getUserByUserName(login));
    if (!existing || existing.password !== password)
        return res.sendStatus(403);
    return res.status(200).send({
        email: existing.email,
        firstName: existing.firstName,
        lastName: existing.lastName,
        id: existing.id,
        userName: existing.userName
    });
});
exports.signInHandler = signInHandler;
const signUpHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, firstName, lastName, userName, password } = req.body;
    if (!email || !firstName || !lastName || !userName || !password) {
        return res.sendStatus(400).send("one of user data not inserted!");
    }
    const existing = (yield datastore_1.db.getUserByEmail(email)) || (yield datastore_1.db.getUserByUserName(userName));
    if (existing)
        return res.sendStatus(403).send("User already exists");
    const user = {
        id: crypto.randomUUID(),
        email,
        firstName,
        lastName,
        userName,
        password
    };
    yield datastore_1.db.createUser(user);
    return res.sendStatus(200).send("User Saved");
});
exports.signUpHandler = signUpHandler;
