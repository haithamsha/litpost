import { CommentDao } from "./Dao/CommentDao";
import { LikeDao } from "./Dao/LikeDao";
import { InMemoryDataStore } from "./Memorydb";
import { PostDao } from "./Dao/PostDao";
import { UserDao } from "./Dao/UserDao";

export interface DataStore extends CommentDao, LikeDao, PostDao, UserDao {}

export const db = new InMemoryDataStore();