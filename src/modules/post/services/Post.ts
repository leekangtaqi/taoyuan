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
        postModel
            .save()
            .then((doc)=>{
                callback(null, doc)
            }, (err)=>{
                callback(err);    
            })
    };
}