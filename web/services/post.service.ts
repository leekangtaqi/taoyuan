import {IComment} from './comment.service';
import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

export interface IPost {
    title: string,
    initiator: string | Object,
    content: string,
    comments?: IComment[] | string[]
}

@Injectable()
export class PostService {
    private baseUrl: string =  '/api/post';
    constructor(private http: Http){}
    getPostsByPage(pageNum: number, numPerPage: number = 10): Promise<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post(this.baseUrl + '/all', JSON.stringify({pageNum: pageNum, numPerPage: numPerPage}), options)
            .toPromise()
            .then(res=><IPost[]>res.json().data)
            .catch(err => {
                console.error(err);
                Promise.reject(err.message || err.json().error)
            })
    }
    createPost(post: IPost){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post(this.baseUrl, JSON.stringify(post), options)
            .toPromise()
            .then(res => <IPost>res.json().data)
            .catch(err => {
                console.error(err);
                Promise.reject(err.message || err.json().error)
            })    
    }
    getPosts(): IPost{
        return ;
    }
    getPostById(id: string): IPost{
        return ;
    }
}