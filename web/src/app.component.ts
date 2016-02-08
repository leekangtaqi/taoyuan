import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {MenuComponent} from './menu.component';
import {UserRegistryComponent} from './user_registry.component';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'web/templates/layout.html',
    styles: ['.selected:{background:red}'],
    directives:[MenuComponent, UserRegistryComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/user/register', name: 'UserRegistry', component: UserRegistryComponent}
])
export class AppComponent implements OnInit{
    private title = '桃花源记';
    public heroes;
    ngOnInit(){
       
    }
    constructor(){}
}