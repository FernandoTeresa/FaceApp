import { CommentsComponent } from './../components/comments/comments.component';
import { Comment} from './../classes/comment';
import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { catchError, Observable, map, tap, of, timestamp } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FaceAppService {

  user: User[] = [];
  posts: Post[] = [];
  comments: Comment[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  dataRequestUser(){
    this.http.get<User[]>('http://localhost:3000/posts').subscribe((a: User[]) => {
      for (let i = 0; i < a.length; i++) {
        let users: User = new User(a[i].id, a[i].first_name, a[i].last_name);
        this.user.push(users);
      }
    });
  }

  dataRequestPost() {
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe((res: Post[]) => {
      for (let i = 0; i < res.length; i++) {
        let a = res[i];
        let post: Post = new Post(a.id, a.title, a.content, new Date(a.date), a.id_user, a.user, a.comments);
        this.posts.push(post);
      }
    });
  }

  getPost() {
    return this.posts;
  }

  getUser() {
    return this.user;
  }

  addPost(value: Post) {
      let user: User = {
        id: 5,
        first_name: 'Joca',
        last_name: 'Jacinto'
      }
      value.id = Math.floor(Math.random() * (20 - 5) + 5);
      value.id_user = 5;
      value.date = new Date()
      value.comments = [];
      
      let post: Post = new Post(value.id, value.title, value.content, value.date, value.id_user, user, value.comments);
      this.posts.push(post);
  }

  addcomments(value: Comment, idpost: number){
    let user: User = {
      id: 6,
      first_name: 'PiPi',
      last_name: 'Meia Rasgada'
    }
  
    value.id = Math.floor(Math.random() * (20 - 5) + 5);
    value.id_user = 6;
    value.date = new Date();

    let comment: Comment = new Comment(value.id, value.content, value.date, idpost,value.id_user,user)
    this.comments.push(comment);

  }
  

}