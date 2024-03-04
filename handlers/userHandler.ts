import { ExpressHandler, User } from "../types";
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "../api";
import { db } from "../datastore";
import exp from "constants";


export const signInHandler: ExpressHandler<SignInRequest, SignInResponse> = async (req, res) => {
    const {login, password} = req.body;
    if(!login || !password) return res.sendStatus(400);

    const existing = await db.getUserByEmail(login) || await db.getUserByUserName(login);
    if(!existing || existing.password !== password)
    return res.sendStatus(403);

    return res.status(200).send({
        email: existing.email,
        firstName: existing.firstName,
        lastName: existing.lastName,
        id: existing.id,
        userName: existing.userName
    });

}

export const signUpHandler: ExpressHandler<SignUpRequest, SignUpResponse> = async (req, res) => {
    const {email, firstName, lastName, userName, password} = req.body;
    if(!email || !firstName || !lastName || !userName || !password) {
        return res.sendStatus(400).send("one of user data not inserted!");
    }

    const existing = await db.getUserByEmail(email) || await db.getUserByUserName(userName);

    if(existing) return res.sendStatus(403).send("User already exists");

    const user:User = {
        id: crypto.randomUUID(),
        email,
        firstName,
        lastName,
        userName,
        password
    };

    await db.createUser(user);
    return res.sendStatus(200).send("User Saved");

}