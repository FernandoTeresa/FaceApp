import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { catchError, Observable, map, tap, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FaceAppService {
  
  user: User[]=[];
  posts: Post[]=[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  dataRequestPost(){
    this.http.get<User[]>('http://localhost:3000/posts').subscribe((a:User[])=>{
      for(let i=0;i<a.length;i++){
        let users:User = new User(a[i].id,a[i].first_name,a[i].last_name);
        this.user.push(users);
      }
      
    });

    this.http.get<Post[]>('http://localhost:3000/posts').subscribe((res:Post[]) =>{
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

  addPost(value: Post){
    
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe((res:Post[]) =>{
      for (let i=0;i<res.length; i++){
        let a = res[i];
        value.id = a.id;
        value.title = a.title;
        value.content = a.content;
        value.date = a.date;
        value.id_user = a.id_user;
        value.user = a.user;
        value.comments = a.comments;
        let post:Post = new Post(a.id,a.title,a.content,new Date(a.date),a.id_user,a.user,a.comments);
        this.posts.push(post);
        console.log(this.posts);
      }
      });

  
  }
  

}