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

  constructor(public faceappservice:FaceAppService, public userservice: UserService){}

  ngOnInit(): void {
    this.faceappservice.dataRequestPost();
  }

  get(){
    this.faceappservice.getPost;
    this.userservice.getUser;
  }


}
