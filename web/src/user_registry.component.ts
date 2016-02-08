import {UserService, IUser} from '../services/user.service';
import {Component, View} from 'angular2/core';

@Component({
    providers: [UserService]
})
@View({
    templateUrl: 'web/templates/registry.html'
})
export class UserRegistryComponent{
    constructor(private service: UserService){}
    register(){
        //TODO
        var user: IUser = {
            crtOn: '1',
            name: '1',
            password: '1'
        };
        this.service.create(user)
            .then(user=>{
                
            })
    }
}