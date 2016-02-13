"use strict";
import Model = require('../models/Post');

export = class PostSerivice{
    private context;
    constructor(context){
        this.context=context;
    };
    create(post: Model.IPost, callback){
        var Post = this.context.models.Post;
        var postModel = new Post(post);
        postModel.crtOn = (new Date()).getTime();
        postModel
            .save()
            .then((doc)=>{
                callback(null, doc)
            }, (err)=>{
                callback(err);    
            })
    };
    getPostsCount(callback: Function){
        var Post = this.context.models.Post;
        Post.find().count(callback);
    };
    getPostsByPage(postModel: {pageNum: number, numPerPage: number}, callback){
        var Post:any = this.context.models.Post;
        Post.find({}, null, {skip: (postModel.pageNum-1)*postModel.numPerPage, limit: postModel.numPerPage, sort: {crtOn: -1}, populate: {path: 'initiator'}, lean: true})
            .then((doc)=>{
                callback(null, doc)
            }, (err)=>{
                callback(err);    
            })
    }
}