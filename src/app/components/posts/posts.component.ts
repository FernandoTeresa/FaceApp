import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/classes/post';
import { FaceAppService } from 'src/app/services/face-app.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() post: Post |null = null;


  constructor(public faceappservice:FaceAppService, public userservice: UserService) { }

  ngOnInit(): void {
  }

  remove(){

    if (!this.post || !this.checkUser()){
      return
    }

    this.faceappservice.removePost(this.post.id);
  }

  checkUser(){
    return this.userservice.getUser() && this.post?.id_user === this.userservice.getUser().id
  }



}
