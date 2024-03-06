"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDataStore = void 0;
class InMemoryDataStore {
    constructor() {
        this.users = [];
        this.posts = [];
        this.comments = [];
        this.likes = [];
    }
    getUserById(id) {
        throw new Error("Method not implemented.");
    }
    createComment(comment) {
        this.comments.push(comment);
        return Promise.resolve();
    }
    listComment(postId) {
        return Promise.resolve(this.comments);
    }
    deleteComment(id) {
        const index = this.comments.findIndex(c => c.id === id);
        if (index === -1)
            return Promise.resolve();
        this.comments.slice(index);
        return Promise.resolve();
    }
    createLike(like) {
        this.likes.push(like);
        return Promise.resolve();
    }
    listPosts() {
        return Promise.resolve(this.posts);
    }
    createPost(post) {
        this.posts.push(post);
        return Promise.resolve();
    }
    getPost(id) {
        return Promise.resolve(this.posts.find(p => p.id === id));
    }
    deletePost(id) {
        const index = this.posts.findIndex(p => p.id === id);
        if (index == -1)
            return Promise.resolve();
        this.posts.slice(index);
        return Promise.resolve();
    }
    createUser(user) {
        this.users.push(user);
        return Promise.resolve();
    }
    getUserByEmail(email) {
        return Promise.resolve(this.users.find(u => u.email === email));
    }
    getUserByUserName(userName) {
        return Promise.resolve(this.users.find(u => u.userName === userName));
    }
}
exports.InMemoryDataStore = InMemoryDataStore;
