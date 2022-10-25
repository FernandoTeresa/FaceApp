import { EmailValidator } from "@angular/forms";

export interface IUser {
    id:number;
    username: string;
    password: string;
    first_name:string;
    last_name:string;
    email:string;
    photo?:File;
}