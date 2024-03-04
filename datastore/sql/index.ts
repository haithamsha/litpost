import { DataStore } from "..";
import { Comment, Like, Post, User } from "../../types";
import {open as sqliteOpen, Database} from 'sqlite';
import sqlite3 from "sqlite3";
import path from 'path';

export class SqlDataStore implements DataStore{
    private db!: Database<sqlite3.Database, sqlite3.Statement>;

    public async openDb() {
        // open database
        this.db = await sqliteOpen({
            filename: path.join(__dirname, 'codesquare.sqlite'),
            driver: sqlite3.Database
        })

        //enforce forien key for sqlite
        this.db.run("PRAGMA foreign_keys = ON;");

        await this.db.migrate({
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
        return this.db.all<Post[]>("SELECT * FROM Post");
    }
    
    async createPost(post: Post): Promise<void> {
        await this.db.run
        ("INSERT INTO POST(id,title,url,postedAt, userId) VALUES(?,?,?,?,?)", 
        post.id,
        post.title,
        post.url,
        post.postedAt,
        post.userId);
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