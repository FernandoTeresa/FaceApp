import { Post } from './classes/post';
import { FaceAppService } from './services/face-app.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FaceApp';

  constructor(public faceappservice:FaceAppService){}

  ngOnInit(): void {
    this.faceappservice.dataRequestPost();
  }

  get(){
    this.faceappservice.getPost;
    this.faceappservice.getUser;
  }


}
