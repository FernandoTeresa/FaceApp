import { UserService } from 'src/app/services/user.service';
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

  
  addcomment(value: Comment){
    
    this.faceappservice.addComments(value, this.postId);
    let x = <HTMLInputElement>document.getElementById("new_comments");
    x.value = '';
  }


}
