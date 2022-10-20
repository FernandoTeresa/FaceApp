import { IAuthToken } from './../../interfaces/i-authToken';
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

  ngOnInit(): void {

    this.faceappservice.dataRequestPost();

  }


  get user():User|null{
    return this.userservice.setUser();
  }


  remove(postId:number){
    this.faceappservice.removePost(postId);
  }

}