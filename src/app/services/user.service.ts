import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { FaceAppService } from './face-app.service';

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

  addUser(value:User){
    this.http.post<User>('http://localhost:3000/registerUser',value).subscribe((res:User)=>{
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

  login(data: User){
    console.log(data);
    this.http.post<User>('http://localhost:3000/login',data).subscribe((res:User)=>{
      this.user=new User(res.id, res.username, res.password,res.first_name, res.last_name);
      this.router.navigate(['/list-posts']);
    }, (err) => {

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
    } )
    
  }
}
