import { IComment } from './../interfaces/i-comment';
import { User } from './user';
export class Comment implements IComment{
    id: number;
    content: string;
    date: Date;
    id_post:number;
    id_user:number;
    user:User;

    constructor(id:number, content:string, date:Date, id_post:number, id_user:number, user:User){
        this.id=id;
        this.content=content;
        this.date=date;
        this.id_post=id_post;
        this.id_user=id_user;
        this.user=new User(user.id, user.username, user.password,user.first_name, user.last_name);

    }
}