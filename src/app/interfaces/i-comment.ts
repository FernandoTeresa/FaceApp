import { User } from "../classes/user";

export interface IComment {
    id: number;
    content: string;
    date: Date;
    id_post:number;
    id_user:number;
    user:User;
}
