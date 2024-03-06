import { ExpressHandler, User } from "../types";
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "../api";
import { db } from "../datastore";
import { signJWT } from "../auth";


export const signInHandler: ExpressHandler<SignInRequest, SignInResponse> = async (req, res) => {
    const {login, password} = req.body;
    if(!login || !password) return res.sendStatus(400).send({error: "all fields are required"});

    // const passwordHash = hashPassword(password);

    const existing = await db.getUserByEmail(login) || await db.getUserByUserName(login);
    if(!existing || existing.password !== password)
    return res.sendStatus(403).send({error: "User not exists"});

    const jwt = signJWT({userId: existing.id});

    return res.status(200).send({
        user: {email: existing.email,
        firstName: existing.firstName,
        lastName: existing.lastName,
        id: existing.id,
        userName: existing.userName
        },
        jwt
    });
}

export const signUpHandler: ExpressHandler<SignUpRequest, SignUpResponse> = async (req, res) => {
    const {email, firstName, lastName, userName, password} = req.body;
    if(!email || !firstName || !lastName || !userName || !password) {
        return res.status(400).send({error: "one of user data not inserted!"});
    }

    const existing = await db.getUserByEmail(email) || await db.getUserByUserName(userName);

    if(existing) return res.status(403).send({error: "User already exists"});

    // encrypt password
    //const passwordHash = hashPassword(password);
    
    const user:User = {
        id: crypto.randomUUID(),
        email,
        firstName,
        lastName,
        userName,
        password
    };
    
    await db.createUser(user);
    const jwt = signJWT({userId: user.id});
    return res.status(200).send({jwt});
}


// function hashPassword(password: string): string {
//     return crypto.pbkdf2Sync(password, process.env.PASSWORD_SALT!, 42, 64, 'sha512').toString('hex');    
// }