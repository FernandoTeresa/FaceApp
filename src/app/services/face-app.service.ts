import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class FaceAppService {
  
  user: User[]=[];
  posts: Post[]=[];

  constructor(private http:HttpClient) { }

  dataRequestPost(){
    this.http.get<User[]>('assets/mock-user.json').subscribe((a:User[])=>{
      for(let i=0;i<a.length;i++){
        let users:User = new User(a[i].id,a[i].first_name,a[i].last_name);
        this.user.push(users);
      }
      
    });

    this.http.get<Post[]>('assets/mock-obj-post.json').subscribe((res:Post[]) =>{
    for (let i=0;i<res.length; i++){
      let a = res[i];
      let post:Post = new Post(a.id,a.title,a.content,new Date(a.date),a.id_user,a.user,a.comments);
      this.posts.push(post);
    }
    });
  }

  getPost(){
    return this.posts;
  }

  getUser(){
    return this.user;
  }
  



}

