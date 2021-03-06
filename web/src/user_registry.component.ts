import {UserService, IUser} from '../services/user.service';
import {Component, View, EventEmitter, Output, Injector} from 'angular2/core';
import {User} from '../models/User';
import {Router} from 'angular2/router';
import {store} from './store';

@Component({
    providers: [UserService]
})
@View({
    styles: [`
        .ng-valid[required] {
            border-left: 5px solid #42A948; /* green */
        }

        .ng-invalid {
            border-left: 5px solid #a94442; /* red */
        }
    `],
    templateUrl: 'web/templates/registry.html'
})
export class UserRegistryComponent{
    public model = new User('', '');  
    @Output('loginEmitter') loginEmitter = new EventEmitter<User>();  
    private active = true;
    constructor(
        private service: UserService, 
        private _router: Router,
        private _injector: Injector
        ){}
    onReset(){
        this.model = new User('', '');
        this.active = false;
        setTimeout(()=>{this.active = true}, 0)
    }
    onSubmit(){
        this.service.create(this.model)
            .then(user=>{
                store.emit({methodName: 'loggedIn', user: user});               
                this.loginEmitter.emit(user);
                this._router.navigate(['PostList', {loggedIn: true}]);
            })
    }
}