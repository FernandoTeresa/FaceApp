import { User } from "../classes/user";
import { Comment } from "../classes/comment";

export interface IPost {
    id:number;
    title:string;
    content:string;
    id_user:number;
    user:User;
    comments:Comment[];
    create_at?:Date;
    updated_at?:Date;
}
