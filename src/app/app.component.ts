import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FaceApp';

  constructor(public userservice: UserService, public router:Router){}

  ngOnInit(): void {

    //converte para json o conteudo da string que foi guardada na memoria local se houver 
    //senao converte para vazio, e guarda no objeto log_obj 
    let log_obj = JSON.parse(localStorage.getItem('user') || '{}');
    
    //se no objeto for vazio ou nulo
    if (log_obj === "" || log_obj === null){
      //retorn para o login
      this.router.navigate(['/login']);
    }else{
      //senao vai guardar o objeto que veio da memoria local para o objeto user para se
      //manter logado, ou seja ter sempre os mesmas propriedades mesmo quando a pagina fizer
      //refresh
      this.userservice.user = log_obj;
      //retorna para a pagina inicial
      this.router.navigate(['/']);
    }
  }
}