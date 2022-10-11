import { Comment } from './../../classes/comment';
import { Component, Input, OnInit } from '@angular/core';
import { FaceAppService } from 'src/app/services/face-app.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;

  constructor(public faceappservice:FaceAppService) { }

  ngOnInit(): void {
  }

  //a funçao addcomment recebe como parametro o objeto value do tipo Comment
  addcomment(value: Comment){
    //vai chamar a função addcomments do serviço faceapp e envia como o parametro o objeto value 
    //e o postId do post em que está a fazer o comentario
    this.faceappservice.addcomments(value, this.postId);
    //depois de enviar na funçao os parametros limpa o campo do formulario do comentario
    let x = <HTMLInputElement>document.getElementById("new_comments");
    x.value = '';
  }

}
