import { Comment } from './comment';
import { IPost } from './../interfaces/i-post';
import { User } from './user';
export class Post implements IPost{

    id:number;
    title: string;
    content: string;
    id_user: number;
    user:User;
    comments:Comment[]=[];
    create_at?:Date;
    updated_at?:Date;

    constructor(id:number, title:string, content:string, id_user:number, user:User, comments:Comment[], create_at?:Date,updated_at?:Date){
        this.id = id;
        this.title = title;
        this.content = content;
        this.id_user = id_user;
        this.user = new User(user.id,user.username, user.password, user.first_name, user.last_name, user.email);
        for(let i=0;i<comments.length;i++){
            let a = comments[i];
            let b = new Comment(a.id,a.content,a.id_post,a.id_user,a.user,a.updated_at,a.created_at);
            this.comments.push(b);
        }
        this.create_at = create_at;
        this.updated_at = updated_at;
    }
    
    addComment(comment:Comment){
        let a = new Comment(comment.id,comment.content,this.id,comment.id_user,comment.user,comment.updated_at, comment.created_at);
        this.comments.push(a);
    }

}
