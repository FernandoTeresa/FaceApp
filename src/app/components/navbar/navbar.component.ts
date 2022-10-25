import { FaceAppService } from 'src/app/services/face-app.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router, public userservice:UserService, public faceappservice:FaceAppService) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['/']);
  }

  login(){
    this.router.navigate(['/login']);
  }

  register(){
    this.router.navigate(['/register']);
  }

  
  logout(){
    this.userservice.logout();
    this.router.navigate(['/login']);
  }

  posts(id:number){
    this.router.navigate(['/posts/',id]);
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  
}