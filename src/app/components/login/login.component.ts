import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../classes/user';
import { Component, OnInit} from '@angular/core';
import { FaceAppService } from 'src/app/services/face-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public faceappservice:FaceAppService, public userservice:UserService, public router:Router) { }

  ngOnInit(): void {
  
  }

  //recebe os dados do formulario e envia para a função login no userservice
  login_form(value: User){

    this.userservice.login(value);


    //depois de enviar os dados limpa os campos 
    let x = <HTMLInputElement>document.getElementById("username");
    x.value = '';
    let y = <HTMLInputElement>document.getElementById("password");
    y.value = '';
  }

}