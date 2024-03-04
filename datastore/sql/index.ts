import { DataStore } from "..";
import { Comment, Like, Post, User } from "../../types";
import {open as sqliteOpen} from 'sqlite';
import sqlite3 from "sqlite3";
import path from 'path';

export class SqlDataStore implements DataStore{
    public async openDb() {
        // open database
        const db = await sqliteOpen({
            filename: path.join(__dirname, 'codesquare.sqlite'),
            driver: sqlite3.Database
        })

        await db.migrate({
            migrationsPath: path.join(__dirname, "migrations")
        });
        return this;
    }

    createComment(comment: Comment): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listComment(postId: string): Promise<Comment[]> {
        throw new Error("Method not implemented.");
    }
    deleteComment(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createLike(like: Like): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listPosts(): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    createPost(post: Post): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getPost(id: string): Promise<Post | undefined> {
        throw new Error("Method not implemented.");
    }
    deletePost(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createUser(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    getUserByUserName(userName: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }

}