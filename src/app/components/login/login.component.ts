import { UserService } from './../../services/user.service';
import { User } from './../../classes/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceAppService } from 'src/app/services/face-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public faceappservice:FaceAppService, public userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.dataRequestUser();
  }

  getuser(){
    this.userservice.getUser;
  }

  login_form(value: User){
    this.userservice.login(value)
  }

}
