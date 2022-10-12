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
    //guarda numa variavel o conteudo do elemento com o id new_username
    let user = <HTMLInputElement>document.getElementById("new_username");
    //guarda numa variavel o conteudo do elemento com o id new_password
    let pass = <HTMLInputElement>document.getElementById("new_password");
    //se o valor da variavel user e a variavel pass se estiver vazio manda um alert a informar do erro
    // se nao estiver vazio chama o metodo addUser e envia por argumento o conteudo do objecto do tipo User
    // e depois disso rederecciona para a pagina principal
    if ((user.value != '') && (pass.value != '')){ 
      this.userservice.addUser(values);
      this.router.navigate(['/']);
    }else{
      alert('Invalid Username or Password');
    }
    //depois de enviado, os campos são apagados
    let x = <HTMLInputElement>document.getElementById("new_username");
    x.value = '';
    let y = <HTMLInputElement>document.getElementById("new_password");
    y.value = '';
    let z = <HTMLInputElement>document.getElementById("new_fname");
    z.value = '';
    let h = <HTMLInputElement>document.getElementById("new_lname");
    h.value = '';
  }


}
