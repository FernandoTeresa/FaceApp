import { User } from "../classes/user";

export interface IComment {
    id: number;
    content: string;
    id_post:number;
    id_user:number;
    user:User;
    updated_at?:Date;
    created_at?:Date;
}

/* 
interfaces » Uma vez definida uma interface e implementada pelas classes devem ter o comportamento 
descrito na interface, ou seja, devem ter os mesmos métodos definidos na interface. 
Dizemos que as classes implementam a interface pois de fato uma classe ao implementar uma interface 
deve coneter a implementação de todos os métodos definidos na interface.

*/