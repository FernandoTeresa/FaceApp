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

  // recebe por argumento os dados introduzidos pelo user no objecto tipo Post
  add(value:Post){
    //envia o que recebeu para o metodo addpost do serviço faceapp
    this.faceappservice.addPost(value);
    //depois de enviado limpa os campos
    let x = <HTMLInputElement>document.getElementById("title_post");
    x.value = '';
    let y = <HTMLInputElement>document.getElementById("content_post");
    y.value = '';
  }

}
