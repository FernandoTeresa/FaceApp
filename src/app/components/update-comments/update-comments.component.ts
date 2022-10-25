import { Component, Input, OnInit } from '@angular/core';
import { FaceAppService } from 'src/app/services/face-app.service';
import { UserService } from 'src/app/services/user.service';
import { Comment } from 'src/app/classes/comment';
import { Post } from 'src/app/classes/post';

@Component({
  selector: 'app-update-comments',
  templateUrl: './update-comments.component.html',
  styleUrls: ['./update-comments.component.css']
})
export class UpdateCommentsComponent implements OnInit {

  @Input() comment: Comment |null = null;
  @Input() Idpost:number |null = null;

  constructor(public faceappservice:FaceAppService, public userservice: UserService) { }

  ngOnInit(): void {
  }

  public content:string="";

  checkuser(){
    return this.userservice.getUser() && this.comment && this.comment.id_user === this.userservice.getUser().id
  }

  updateComment(){

    if (this.comment === null){
      return
    }
    if (!this.Idpost || !this.comment.id){
      return
    }

    console.log(this.content);

    this.faceappservice.updateComment(this.content, this.comment.id, this.Idpost);

    this.content= '';

  }


}
