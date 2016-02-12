import {Component, View, Input} from 'angular2/core';
import {OnInit, OnChanges} from 'angular2/core';
import {RouteConfig, Router, RouterLink, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {PostService} from '../../services/post.service'
import {Post, IPost} from '../../models/Post';
import {store} from '../store';

declare var markdown;
@Component({
    providers: [PostService]
})
@View({
    templateUrl: 'web/templates/post_add.html',
    styles: [
    `
    #postAddTextarea{
        height:300px;
    }
    #preview{
        height: 300px;
        border: 1px solid #ccc;
        overflow-y: scroll;
    }
    .ng-valid[required] {
        border-left: 5px solid #42A948; /* green */
    }
    .ng-invalid {
        border-left: 5px solid #a94442; /* red */
    }
    `],
    directives:[ROUTER_DIRECTIVES]
})
export class PostAddComponent implements OnInit{
    private post: IPost = new Post({
        title: '',
        content: '',
        initiator: typeof store.user === 'string'? store.user : store.user._id
    });
    ngOnInit(){
        
    }
    constructor(
        private postService: PostService,
        private _router: Router
    ){}
    onInput(val){
        this.post.content = document.getElementById('preview').innerHTML = markdown.toHTML(val);
    }
    onSubmit(){
        this.postService.createPost(this.post)
            .then(post=>{
                document.getElementById('preview').innerHTML = '';
                this._router.navigate(['PostList']);
            })
    }
}