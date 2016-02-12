"use strict";
import {Controller, Render, Get, Post, Req, Body} from '../framework/rodos/Decorators';
import express = require('express');

@Controller('/api/user')
class UserController{
    constructor(){};
    @Get('/', {jsonResponse: true})
    async getUserById(){
        return {name: '111'}
    }
    
    @Post('/login', {jsonResponse: true})
    async login(@Body() user){
        try{
            var result = await global['applicationContext'].services.user.getUserByUsernameAndPasswordAsync(user);
            return {data: result, error: null};   
        }catch(err){
            console.error(err)
            return {error: err}
        }
    }
    
    @Post('/', {jsonResponse: true})
    async create(@Body() user){
        try{
            var result = await global['applicationContext'].services.user.createAsync(user);
            return {data: result, error: null};   
        }catch(err){
            console.error(err)
            return {error: err}
        }
    }
}

