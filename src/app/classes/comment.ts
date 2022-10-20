import { IComment } from './../interfaces/i-comment';
import { User } from './user';
export class Comment implements IComment{
    id: number;
    content: string;
    id_post:number;
    id_user:number;
    user:User;
    updated_at?:Date;
    created_at?:Date;

    constructor(id:number, content:string, id_post:number, id_user:number, user:User, updated_at?:Date, created_at?:Date){
        this.id=id;
        this.content=content;
        this.id_post=id_post;
        this.id_user=id_user;
        this.user=new User(user.id,user.username, user.password ,user.first_name, user.last_name, user.email);
        this.created_at = created_at;
        this.updated_at = updated_at;

    }
}