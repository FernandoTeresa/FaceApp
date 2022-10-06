import { Comment } from './comment';
import { IPost } from './../interfaces/i-post';
import { User } from './user';
export class Post implements IPost{

    id:number;
    title: string;
    content: string;
    date: Date;
    id_user: number;
    user:User;
    comments:Comment[]=[];


    constructor(id:number, title:string, content:string, date:Date, id_user:number, user:User, comments:Comment[]){
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.id_user = id_user;
        this.user = new User(user.id, user.first_name, user.last_name);
        for(let i=0;i<comments.length;i++){
            let a = comments[i];
            let b = new Comment(a.id,a.content,a.date,a.id_post,a.id_user,a.user);
            this.comments.push(b);
        }
    }
    
    addComment(comment:Comment){
        console.log("comment", comment);
        let a = new Comment(comment.id,comment.content,comment.date,this.id,comment.id_user,comment.user);
        this.comments.push(a);
    }

}
