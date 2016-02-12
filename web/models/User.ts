export interface IUser{
    name: string;
    password: string;
}
export class User {
    constructor(
        public name: string,
        public password: string
    ){}
}