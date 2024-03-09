import { CommentDao } from "./Dao/CommentDao";
import { LikeDao } from "./Dao/LikeDao";
import { InMemoryDataStore } from "./Memorydb";
import { PostDao } from "./Dao/PostDao";
import { UserDao } from "./Dao/UserDao";
import { SqlDataStore } from "./sql";

export interface DataStore extends CommentDao, LikeDao, PostDao, UserDao {}

export let db: DataStore;

export async function initDb() {
    //db = new InMemoryDataStore();
    db = await new SqlDataStore().openDb();
} 