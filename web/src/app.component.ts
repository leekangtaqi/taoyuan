import {Component, View, ViewChild} from 'angular2/core';
import {OnInit, OnChanges, AfterViewInit} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet, ROUTER_DIRECTIVES, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {MenuComponent} from './menu.component';
import {UserRegistryComponent} from './user_registry.component';
import {UserLoginComponent} from './user_login.component';
import {PostAddComponent} from './post/post_add.component';
import {PostListComponent} from './post/post_list.component';
import {store} from './store';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'web/templates/layout.html',
    styles: [`
    .selected{background:red}
    `],
    directives:[MenuComponent, UserLoginComponent, UserRegistryComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/posts', name: 'PostList', component: PostListComponent, useAsDefault: true},
    {path:'/user/register', name: 'UserRegistry', component: UserRegistryComponent},
    {path:'/user/login', name: 'UserLogin', component: UserLoginComponent},
    {path:'/post/add', name: 'PostAdd', component: PostAddComponent}
])
export class AppComponent implements AfterViewInit, OnInit, CanDeactivate, OnChanges{
    @ViewChild(RouterOutlet) viewChild:RouterOutlet;
    private title = '桃花源记';
    private store = store;
    private _navIndex:number = 1;
    private _loggedIn = false;
    public totalPage: number = 0;
    public currPage: number = 0;
    public get loggedIn(){
        return this._loggedIn;
    }
    public get navIndex(){
        return this._navIndex;
    }
    ngOnInit(){
        var me = this;
        store.subscribe((value)=>{
            if(value.methodName === 'loggedIn'){
                me._loggedIn = true;
                me._navIndex = 1;
            }
            if(value.methodName === 'page'){
                this.totalPage = value.pageModel.totalPage;
                this.currPage = value.pageModel.currPage;
            }
        })
    }
    onPrevious(){
        var me = this;
        if(me.currPage<=1){
            return;
        }
        store.emit({methodName: 'toPage', pageModel:{currPage: me.currPage - 1}})
    }
    onNext(){
        var me = this;
        if(me.currPage>=me.totalPage){
            return;
        }
        store.emit({methodName: 'toPage', pageModel:{currPage: me.currPage + 1}})
    }
    ngAfterViewInit(){
        console.warn(this);
    }
    ngOnChanges(t){
        
    }
    routeInit(){
        
    }
    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
        
    }
    onLoggedIn(e){
        alert(e);
    }
    constructor(){}
}