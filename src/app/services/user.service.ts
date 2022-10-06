import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { FaceAppService } from './face-app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User[] = [];

  constructor(private http: HttpClient, private router: Router, public faceappservice:FaceAppService) { }

  dataRequestUser(){
    this.http.get<User[]>('http://localhost:3000/users').subscribe((a: User[]) => {
      for (let i = 0; i < a.length; i++) {
        let users: User = new User(a[i].id, a[i].username, a[i].password,a[i].first_name, a[i].last_name, a[i].log);
        this.user.push(users);
      }
    });
  }
  
  getUser() {
    return this.user;
  }

  login(data: User){
    let x = this.user.find(users =>users.username === data.username);
    if(x != undefined){
      this.router.navigate(['/list-posts']);
      console.log("está logado");
    }else{
      console.log("User desconhecido");
    }
  }


}
