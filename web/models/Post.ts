import {IUser} from './User';

export interface IPost{
    title: string,
    content: string,
    comments?: string[],
    initiator: string | IUser
}
export class Post implements IPost{
    title: string;
    content: string;
    comments: string[];
    initiator: string | IUser;
    
    constructor(post: IPost){
        this.title = post.title;
        this.content = post.content;
        this.initiator = post.initiator; 
    }
} 