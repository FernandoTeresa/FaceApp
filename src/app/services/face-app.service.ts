import { User } from './../classes/user';
import { CommentsComponent } from './../components/comments/comments.component';
import { Comment} from './../classes/comment';
import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


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

  constructor(private http: HttpClient, private router: Router) { }

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

  addPost(value: Post) {
      let user: User = {
        id: 5,
        username: 'joca',
        password: '',
        first_name: 'Joca',
        last_name: 'Jacinto',
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
      username: 'pipi_rasgada',
      password: '',
      first_name: 'PiPi',
      last_name: 'Meia Rasgada',
    }

    value.id = Math.floor(Math.random() * (20 - 8) + 8);
    value.id_user = 6;
    value.date = new Date();
    value.user = user;
    let post = this.posts.find(item => item.id === idpost);
    if (post != undefined){
      post.addComment(value);
    }

  }


}