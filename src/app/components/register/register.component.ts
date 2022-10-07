import { Router } from '@angular/router';
import { User } from './../../classes/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userservice:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  adduser(values:User){
    this.userservice.addUser(values);
  }


}
