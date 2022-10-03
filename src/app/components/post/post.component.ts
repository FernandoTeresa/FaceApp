import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/classes/post';
import { FaceAppService } from 'src/app/services/face-app.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router, private http:HttpClient, public faceappservice:FaceAppService) { }

  ngOnInit(): void {
  }

 
  add(value:Post){
    
    console.log(value);
    this.faceappservice.addPost(value);

  }



}
