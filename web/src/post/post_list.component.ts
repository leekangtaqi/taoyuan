import {Component, OnInit, EventEmitter} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {PostService} from '../../services/post.service';
import {store} from '../store';

@Component({
    templateUrl: 'web/templates/posts.html',
    styles: [`
        .post{
            margin-bottom: 80px;
        }
        .post-body{
            color: #555;
            margin-top: 30px;
        }
        .post-meta >div{
            float: left;
            font-size: 12px;
        }
        .post-meta >div:nth-child(1){
            color: #A2A2A2;
        }
        .post-title{
            position: relative;
            font-size: 26px;
            font-weight: 400;
        }
        .post-title:before {
            content: " ";
            position: absolute;
            left: -10px;
            top: 25%;
            width: 3px;
            height: 50%;
            background: #999;
            transition-property: background-color;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0s;   
        }     
    `],
    providers: [PostService]
})
export class PostListComponent implements OnInit{
    posts:any;
    constructor(
        private _routeParams: RouteParams,
        private postService: PostService
    ){
        store.subscribe((value)=>{
            if(value.methodName === 'toPage'){
                this.toPage(value.pageModel.currPage);
            }
        })
    }
    toPage(page){
        console.warn(page)
        return this.postService.getPostsByPage(page)
            .then(({posts, count})=>{
                store.emit({methodName: 'page', pageModel: {
                    totalPage: Math.ceil(count/10),
                    currPage: page    
                }});
                this.posts = posts.map(post=>{
                        post['crtOn'] = new Date(post['crtOn'])
                        return post;
                    }
                )
            })
    }
    ngOnInit(){
        this.toPage(1);
    }
}