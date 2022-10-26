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

  @Input() comment: Comment;

  constructor(public faceappservice:FaceAppService, public userservice: UserService) { }

  ngOnInit(): void {

    this.content = this.comment.content
  }
  public content:string="";
  

  checkuser(){
    return this.userservice.getUser() && this.comment && this.comment.id_user === this.userservice.getUser().id
  }


  updatecomment(){

    if (this.comment === null){
      return
    }

    this.faceappservice.updateComment(this.content, this.comment);

  }


}
