import { IAuthToken } from './../../interfaces/i-authToken';
import { Post } from 'src/app/classes/post';
import { User } from './../../classes/user';
import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FaceAppService } from '../../services/face-app.service';
import {ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  

  constructor(public faceappservice:FaceAppService, public userservice: UserService, private activatedroute:ActivatedRoute ){  
  }


  public get posts(): Post[] {
    return this.faceappservice.posts;
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params:any) => {
      const id = +params.get('id');

      this.faceappservice.getPosts(id).subscribe((res: Post[]) => {

        this.faceappservice.setPosts(res)
      });
    });
  }

  get user():User|null{
    return this.userservice.getUser();
  }



}