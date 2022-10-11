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

  // redirecciona para a pagina inicial
  home(){
    this.router.navigate(['/']);
  }

  // redirecciona para a pagina do login
  login(){
    this.router.navigate(['/login']);
  }

  // redirecciona para a pagina do registro
  register(){
    this.router.navigate(['/register']);
  }

  
  logout(){
    // apaga do localstorage o conteudo
    localStorage.removeItem('user');
    //poem o objeto user como nulo
    this.userservice.user = null;
    // depois redirecciona para a pagina inicial
    this.router.navigate(['/']);
  }

  // redirecciona para a pagina dos posts
  posts(){
    this.router.navigate(['/posts']);
  }

}