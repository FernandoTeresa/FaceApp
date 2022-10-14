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

  // é criado um objeto do tipo User em privado que pode ser nulo 
  private _user: User | null = null;
  //é criado um metodo get para aceder ao objeto privado
  public get user(): User | null {
    return this._user;
  }
  // é criado um metodo set para conseguir alterar ou adicionar dados no objeto
  public set user(value: User | null) {
    this._user = value;
  }

  constructor(private http: HttpClient, private router: Router) { }

  //é recebido como argumento o objeto do tipo User
  addUser(value:User){
    //faz um pedido get ao url e envia no body o parametro do objeto value 
    //e guarda os dados no array de objectos do tipo Post 
    //para começar o pedido utilizamos o subscribe, guarda a info no array res do tipo Post
    this.http.post<User>('http://localhost:8000/user',value).subscribe((res:User)=>{
      //vai popular o objeto user com as propriedades que vai enviar
      this.user = new User(res.id,res.username,res.password, res.first_name, res.last_name);
      //se houver erro sera tratado para cada caso e sera enviado um alert que tipo de erro foi 
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

  //recebe como parametros o objeto data do tipo User
  login(data: User){
    // faz um pedido post ao endpoint e envia como parametros no body o objeto data
    //para começar o pedido utilizamos o subscribe, guarda a info no objeto res do tipo User
    this.http.post('http://localhost:8000/login',data).subscribe((res:any)=>{
      //vai popular o objeto user com as propriedades enviadas
      this.user=new User(res.user.id, res.user.username, res.user.password,res.user.first_name, res.user.last_name);
      //depois de enviado retorna para a pagina inicial
      this.router.navigate(['/']);
      // converte o objeto this.user em uma string para a variavel user
      let user = JSON.stringify(this.user);
      //vai guardar na memoria local a string user com o nome de user
      localStorage.setItem('user', user);
      // se houver um erro sera tratado os varios tipos de erros e para cada um aparece um alert
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
