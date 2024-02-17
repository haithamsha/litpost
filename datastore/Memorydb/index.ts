import { DataStore } from "..";
import { Comment, Like, Post, User } from "../../types";

export class InMemoryDataStore implements DataStore {
    private users: User[] = [];
    private posts: Post[] = [];
    private comments: Comment[] = [];
    private likes: Like[] = [];

    createComment(comment: Comment): void {
        this.comments.push(comment);
    }

    listComment(postId: string): Comment[] {
        return this.comments;
    }

    deleteComment(id: string): void {
        const index = this.comments.findIndex(c=>c.id === id);
        if(index === -1) return;
        this.comments.slice(index);
    }

    createLike(like: Like): void {
        this.likes.push(like);
    }

    listPosts(): Post[] {
        return this.posts;
    }

    createPost(post: Post): void {
        this.posts.push(post);
    }

    getPost(id: string): Post | undefined {
        return this.posts.find(p=>p.id === id);
    }

    deletePost(id: string): void {
        const index = this.posts.findIndex(p=>p.id === id);
        if(index == -1) return;
        this.posts.slice(index);
    }

    createUser(user: User): void {
        this.users.push(user);
    }

    getUserByEmail(email: string): User | undefined {
        return this.users.find(u=> u.email === email);
    }
    
    getUserByUserName(userName: string): User | undefined {
        return this.users.find(u=> u.userName === userName);
    }

}