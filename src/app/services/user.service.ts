import { IAuthToken } from './../interfaces/i-authToken';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { FaceAppService } from './face-app.service';
import * as moment from 'moment';


const Header = {
  headers: new HttpHeaders({
    Authorization: 'bearer '+ localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: User | null = null;

  public get user(): User | null {
    return this._user;
  }

  public set user(value: User | null) {
    this._user = value;
  }

  constructor(private http: HttpClient, private router: Router) { }


  setUser(){

    let localUser = localStorage.getItem('user')

    if (localUser != null){
      return localUser = JSON.parse(localUser);
    }

  }


  log(){
    let logon = localStorage.getItem('token');

    Header.headers = Header.headers.set('Authorization', 'bearer '+logon);

    if (logon){
      this.http.get<User>('http://localhost:85/auth/user', Header ).subscribe((res:User)=>{
     
      let user = new User(res.id,res.username,res.password,res.first_name, res.last_name, res.email) 
      
      let localUser = JSON.stringify(user);
      localStorage.setItem('user',localUser);
      
      });
    }else{
      this.router.navigate(['/login']);
    }

  }

  addUser(value:User){
    this.http.post<User>('http://localhost:85/user',value, Header).subscribe((res:User)=>{

      this.user = new User(res.id,res.username, res.password, res.first_name, res.last_name, res.email);

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

  login(data: User){

    this.http.post<IAuthToken>('http://localhost:85/login', data, Header).subscribe((res:IAuthToken) => {

      let date = moment().unix();

      if(res.access_token){
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/']);
      }else{
        this.router.navigate(['/login']);
      }

      if (date > res.expires_in){
        this.router.navigate(['/login']);
      }

      this.log();
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

  updateUser(value:User){

    this.http.put<User>('http://localhost:85/user/'+ this.setUser().id, value, Header).subscribe((res:User)=>{    

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

  logout(){
    this.http.post('http://localhost:85/logout',Header);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}