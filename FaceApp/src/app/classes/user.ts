import { IUser } from "../interfaces/i-user";

export class User implements IUser{
    id: number;
    first_name: string;
    last_name: string;


    constructor(id:number,first_name:string,last_name:string){
        this.id= id;
        this.first_name = first_name;
        this.last_name = last_name;
    }
}
