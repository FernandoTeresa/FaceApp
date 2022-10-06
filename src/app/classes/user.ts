import { IUser } from "../interfaces/i-user";

export class User implements IUser{
    id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    log: boolean

    constructor(id:number,username:string,password:string,first_name:string,last_name:string, log:boolean){
        this.id= id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.log = log;
    }

}
