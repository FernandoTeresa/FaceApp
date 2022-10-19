import { IAuthToken } from './../interfaces/i-authToken';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { FaceAppService } from './face-app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  // é criado um objeto do tipo User em privado que pode ser nulo 
  private _user: User | null = null;
  //é criado um metodo get para aceder ao objeto privado
  public get user(): User | null {
    return this._user;
  }
  // é criado um metodo set para conseguir alterar ou adicionar dados no objeto
  public set user(value: User | null) {
    this._user = value;
  }

  constructor(private http: HttpClient, private router: Router) { }

  log(){
    let logon = localStorage.getItem('token');

    if (logon){
      this.http.post<User>('http://localhost:85/post/token', logon).subscribe((res:User)=>{

      console.log(res);
      });
    }else{
      this.router.navigate(['/login']);
    }

  }

  addUser(value:User){
    this.http.post<User>('http://localhost:85/user',value).subscribe((res:User)=>{

      this.user = new User(res.id,res.username,res.password, res.first_name, res.last_name);
    },(err) => {

      switch(err.status){
        case 400:
          alert('ERROR!! Bad Request');
          break;
        case 401:
          alert('ERROR!! Unauthorized');
          break;
        case 403:
          alert('ERROR!! Forbidden');
          break;
        case 404:
          alert('ERROR!! Not Found');
          break;
        case 500:
          alert('ERROR!! Server Error');
          break;
        default:
          alert ('Unknow Error!!');
          break;
      }
    })

  }

  //recebe como parametros o objeto data do tipo User
  login(data: User){

    this.http.post<IAuthToken>('http://localhost:85/login', data).subscribe((res:IAuthToken) => {

      if(res.access_token){
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/']);
      }else{
        this.router.navigate(['/login']);
      }

    },(err)=> {

      switch(err.status){
        case 400:
          alert('ERROR!! Bad Request');
          break;
        case 401:
          alert('ERROR!! Unauthorized');
          break;
        case 403:
          alert('ERROR!! Forbidden');
          break;
        case 404:
          alert('ERROR!! Not Found');
          break;
        case 500:
          alert('ERROR!! Server Error');
          break;
        default:
          alert ('Unknow Error!!');
          break;
      };
    });
  }

  /*
    falta o update aqui, no componente .ts e fazer um html
  */


}
