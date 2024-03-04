import { Post, User } from "./types";

// Post apis
export interface ListPostsRequest {};
export interface ListPostsResponse {
    posts: Post[];
};
export type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>;
export interface CreatePostResponse{};
export interface GetPostRequest {}
export interface GetPostResponse {
    post : Post
};

//user api
export type SignUpRequest = Pick<User, 'email' | 'firstName' | 'lastName' | 'userName' | 'password'>;
export interface SignUpResponse {};

export interface SignInRequest {
    login: string; // userName or email
    password: string;
}

export type SignInResponse = Pick<User, 'email' | 'firstName' | 'lastName' | 'userName' | 'id'>;




