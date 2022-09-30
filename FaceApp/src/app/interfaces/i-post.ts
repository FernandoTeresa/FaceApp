import { User } from "../classes/user";
import { Comment } from "../classes/comment";

export interface IPost {
    id:number;
    title:string;
    content:string;
    date:Date;
    id_user:number;
    user:User;
    comments:Comment[];
}
