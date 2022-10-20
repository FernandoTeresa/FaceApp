import { FaceAppService } from 'src/app/services/face-app.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-postsid',
  templateUrl: './postsid.component.html',
  styleUrls: ['./postsid.component.css']
})
export class PostsidComponent implements OnInit {

  constructor(public userservice:UserService, public faceappservice:FaceAppService) { }

  ngOnInit(): void {
    if (this.userservice.user){
      this.faceappservice.getPostsUser();
    }

  }

  remove(postId:number){
    this.faceappservice.removePost(postId);
  }

}
