import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { User } from 'src/app/classes/user';
import { FaceAppService } from 'src/app/services/face-app.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public faceappservice:FaceAppService) { }

  ngOnInit(): void {
  }

  public title:string = "";

  public content:string = ""
  ;
  // recebe por argumento os dados introduzidos pelo user no objecto tipo Post
  add(){

    //envia o que recebeu para o metodo addpost do serviço faceapp
    this.faceappservice.addPost(this.title, this.content);
    //depois de enviado limpa os campos
    this.title = '';
    this.content = '';
  }

}
