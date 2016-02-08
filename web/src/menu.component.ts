import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'menu'
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
    ngOnInit(){
       
    }
    constructor(){}
}