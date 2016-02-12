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
    templateUrl: 'web/templates/login.html'
})
export class UserLoginComponent{
    public model = new User('', '');   
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
        this.service.login(this.model)
            .then(user=>{
                if(user){
                    store.emit({methodName: 'loggedIn', user: user});               
                    this._router.navigate(['PostList', {loggedIn: true}]);
                    return;
                }
                alert('该用户没有注册');
                this.onReset();
            })
    }
}