import { RequestHandler, response } from "express";
import { db } from "../datastore";
import { ExpressHandler, Post } from "../types";
import crypto from 'crypto';
import { CreatePostRequest, CreatePostResponse, ListPostsRequest, ListPostsResponse } from "../api";



export const listPostHandler: ExpressHandler<ListPostsRequest, ListPostsResponse> 
= async (req, res) => {
    res.send({posts: await db.listPosts()});
};



export const createPostHandler: ExpressHandler<CreatePostRequest, CreatePostResponse> = async (req, res) => {
    if(!req.body.title || !req.body.url) 
    return res.sendStatus(400);
    // TODO get user id from session
    // TODO validate title and url 
    // validate url is new otherwise add +1 to existing post
    const post: Post = {
        id: crypto.randomUUID(),
        postedAt: Date.now(),
        title: req.body.title,
        url: req.body.url,
        userId: res.locals.userId
    };

    await db.createPost(post);
    console.log(db.listPosts());
    res.sendStatus(200);
}