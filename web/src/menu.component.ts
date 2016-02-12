import {Component, View, Input} from 'angular2/core';
import {OnInit} from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'menu',
    inputs: ['loggedIn', 'navIndex']
})
@View({
    templateUrl: 'web/templates/menu.html',
    styles: [`
        ul {
            list-style-type: none;
            overflow: hidden;
            padding: 0px;
            margin: 0px;
        }
        ul li {
            float:left;
            margin-right: 10px;
        }
        .selected {background:red}
    `],
    directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit{
    @Input() navIndex: number = 1;
    ngOnInit(){
       
    }
    onNav(index){
        this.navIndex = index;
    }
    constructor(){}
}