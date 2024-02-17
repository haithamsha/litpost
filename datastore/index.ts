import { CommentDao } from "./CommentDao";
import { LikeDao } from "./LikeDao";
import { InMemoryDataStore } from "./Memorydb";
import { PostDao } from "./PostDao";
import { UserDao } from "./UserDao";

export interface DataStore extends CommentDao, LikeDao, PostDao, UserDao {}

export const db = new InMemoryDataStore();