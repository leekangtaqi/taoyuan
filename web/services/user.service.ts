import {Http, Headers, RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/core'

export interface IUser{
    crtOn: string,
    name: string,
    desc?: string,
    password: string
}

@Injectable()
export class UserService{
    private baseUrl: string = '/api/user';
    constructor(private http: Http){}
    create(user: IUser){
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch(err => {
                console.error(err);
                Promise.reject(err.message || err.json().error);
            })
    }
}