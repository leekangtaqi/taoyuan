"use strict";
import {Controller, Render, Get, Post, Req, Body} from '../framework/rodos/Decorators';
import express = require('express');

@Controller('/api/post')
class PostController{
    constructor(){};
    @Post('/all', {jsonResponse: true})
    async getPostsByPage(@Body() pageModel){
        try{
            var result = await global['applicationContext'].services.post.getPostsByPageAsync(pageModel);
            var count = await global['applicationContext'].services.post.getPostsCountAsync();
            return {data: {posts: result, count: count}, error: null};    
        }catch(err){
            console.error(err)
            return {error: err};
        }
        
    }
    
    @Post('/', {jsonResponse: true})
    async create(@Body() post){
        try{
            console.log(global['applicationContext'].services);
            var result = await global['applicationContext'].services.post.createAsync(post);
            return {data: result, error: null};   
        }catch(err){
            console.error(err)
            return {error: err}
        }
    }
}

