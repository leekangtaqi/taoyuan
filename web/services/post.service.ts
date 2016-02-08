import {IComment} from './comment.service';
import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

export interface IPost {
    title: string,
    user: Object,
    content: string,
    tags?: string[],
    comments?: IComment[]
}

@Injectable()
class Post {
    private baseUrl: string =  '/api/post';
    constructor(private http: Http){}
    getPostsByPage(pageNum: number, numPerPage: number = 10): Promise<IPost[]>{
        return new Promise<IPost[]>((resolve, reject)=>
            setTimeout(()=>resolve([]), 2000)
        );
    }
    createPost(post: IPost){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http
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