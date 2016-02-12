import {EventEmitter} from 'angular2/core';

export class Store extends EventEmitter<Object>{
    loggedIn: boolean = false;
    user: any;
    totalPage: number = 0;
    currPage: number = 1;
    constructor(){
        super();
        this.subscribe((value)=>{
            if(value.methodName === 'loggedIn'){
                console.warn(value)
                this.loggedIn = true;
                this.user = value.user;        
            }
            if(value.methodName === 'page'){
                this.totalPage = value.pageModel.totalPage;
                this.currPage = value.pageModel.currPage;
            }
        })
    }
}
export var store = new Store(); 