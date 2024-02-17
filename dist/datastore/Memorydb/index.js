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
    createComment(comment) {
        this.comments.push(comment);
    }
    listComment(postId) {
        return this.comments;
    }
    deleteComment(id) {
        const index = this.comments.findIndex(c => c.id === id);
        if (index === -1)
            return;
        this.comments.slice(index);
    }
    createLike(like) {
        this.likes.push(like);
    }
    listPosts() {
        return this.posts;
    }
    createPost(post) {
        this.posts.push(post);
    }
    getPost(id) {
        return this.posts.find(p => p.id === id);
    }
    deletePost(id) {
        const index = this.posts.findIndex(p => p.id === id);
        if (index == -1)
            return;
        this.posts.slice(index);
    }
    createUser(user) {
        this.users.push(user);
    }
    getUserByEmail(email) {
        return this.users.find(u => u.email === email);
    }
    getUserByUserName(userName) {
        return this.users.find(u => u.userName === userName);
    }
}
exports.InMemoryDataStore = InMemoryDataStore;
