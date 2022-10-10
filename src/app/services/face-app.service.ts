import { UserService } from 'src/app/services/user.service';
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

  constructor(private http: HttpClient, private router: Router, public userservice:UserService) { }

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
    let iduser = this.userservice.user?.id || null;
    if (iduser === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['']);
      return;
    }
    value.id_user= iduser;
    console.log(value);
    this.http.post<Post>('http://localhost:3000/addNewPosts', value).subscribe((res:Post)=>{
      console.log(res);
      res.comments = [];
      let post = new Post(res.id, res.title, res.content, res.date, res.id_user, res.user, value.comments);
      this.posts.push(post);
    },(err) => {

      switch(err.status){
        case 400:
          alert('ERROR!! Bad Request');
          break;
        case 401:
          alert('ERROR!! Unauthorized');
          break;
        case 403:
          alert('ERROR!! Forbidden');
          break;
        case 404:
          alert('ERROR!! Not Found');
          break;
        case 500:
          alert('ERROR!! Server Error');
          break;
        default:
          alert ('Unknow Error!!');
          break;
      }
    });
   
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