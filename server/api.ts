import { Post, User } from "./types";

// Post apis
export interface ListPostsRequest {};
export interface ListPostsResponse {
    posts: Post[];
};
export type CreatePostRequest = Pick<Post, 'title' | 'url'>;
export interface CreatePostResponse{};
export interface GetPostRequest {}
export interface GetPostResponse {
    post : Post
};

//user api
export type SignUpRequest = Pick<User, 'email' | 'firstName' | 'lastName' | 'userName' | 'password'>;
export interface SignUpResponse {
    jwt: string;
};

export interface SignInRequest {
    login: string; // userName or email
    password: string;
}

export type SignInResponse = {
    user: Pick<User, 'email' | 'firstName' | 'lastName' | 'userName' | 'id'>;
    jwt: string
}



