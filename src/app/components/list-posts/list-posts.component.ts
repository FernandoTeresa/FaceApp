import { Post } from 'src/app/classes/post';
import { User } from './../../classes/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FaceAppService } from '../../services/face-app.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  

  constructor(public faceappservice:FaceAppService, public userservice: UserService, private router: Router){
    
  }

  // uma funçao callback que é invocada imediatamente quando o componente é chamado
  ngOnInit(): void {

    //se existe username no objeto user chama a funçao dataRequestPost do serviço faceapp
    // senao vai enviar para a pagina principal
    if (this.user?.username){
      this.faceappservice.dataRequestPost();
    }else{
      this.router.navigate(['']);
    }
  }

  // get cria uma propriedade dum objeto a uma função

  // cria uma proprieda user do tipo User 
  get user():User|null{
    return this.userservice.user;
  }

  remove(postId:number){
    this.faceappservice.removePost(postId);
  }

}