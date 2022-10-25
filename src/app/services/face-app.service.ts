import { UserService } from 'src/app/services/user.service';
import { User } from './../classes/user';
import { CommentsComponent } from './../components/comments/comments.component';
import { Comment} from './../classes/comment';
import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommaExpr } from '@angular/compiler';


const Header = {
  headers: new HttpHeaders({
    Authorization: 'bearer '+ localStorage.getItem('token'), 
  })
};

@Injectable({
  providedIn: 'root'
})
export class FaceAppService {

  //cria o array de objetos user do tipo User, inicializado a vazio
  user: User[] = [];
  //cria o array de objetos posts do tipo Post, inicializado a vazio
  posts: Post[] = [];
  //cria o array de objetos comments do tipo Comment, inicializado a vazio
  comments: Comment[] = [];
  //cria o array de objetos postid do tipo Post, inicializado a vazio
  postsid: Post[] = [];

  commentsid:Comment[]=[];

  private _comment: Comment | null = null;
  public get comment(): Comment | null {
    return this._comment;
  }
  public set comment(value: Comment | null) {
    this._comment = value;
  }

  constructor(private http: HttpClient, private router: Router, public userservice:UserService) { }


  dataRequestPost() {

    this.http.get<Post[]>('http://localhost:85/posts').subscribe((res: Post[]) => {

      this.setPosts(res)
    });
  }
  getPosts(userId:number |null = null) {
    let url = "http://localhost:85/posts"
    if(userId && userId > 0){
      url += "/user/"+userId
    }
   return this.http.get<Post[]>(url, Header);
  }

  setPosts(posts:Post[]){
    this.posts= []

    for (let i = 0; i < posts.length; i++) { 
      let a = posts[i];
      let post: Post = new Post(a.id, a.title, a.content, a.id_user, a.user, a.comments, a.create_at, a.updated_at);
      this.posts.push(post);
   
    }

  }


  addPost(title:string, content:string) {
    let iduser = this.userservice.getUser().id;

    if (iduser === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['']);
      return;
    }
    let value = {
      title:title,
      content:content,
      comments:[],
      id_user:iduser
    }


    this.http.post<Post>('http://localhost:85/post', value, Header).subscribe((res:Post)=>{

      this.dataRequestPost()

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

  removePost(idPost: number){

    let iduser = this.userservice.getUser().id;

    if (iduser === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['']);
      return;
    }

    this.http.delete<Post>('http://localhost:85/post/'+idPost, Header).subscribe((res:Post)=>{
      this.dataRequestPost()
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

  // getPostsUser(){

  //   this.postsid = [];
  //   this.commentsid=[];
  //   let iduser = this.userservice.getUser().id;

  //   this.http.get<Post[]>('http://localhost:85/posts/user/'+iduser, Header).subscribe((res: Post[]) => {
    
  //   for (let i=0; i<res.length;i++){
  //     let res_post = res[i];
  //     let post = new Post(res_post.id, res_post.title, res_post.content, res_post.id_user, res_post.user, res_post.comments,res_post.create_at, res_post.updated_at);
  //     this.postsid.push(post);
  //   }
  //   });

  // }

  addComments(value: Comment, idpost: number){

    let iduser = this.userservice.getUser().id;

    if (iduser === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['/login']);
      return;
    }

    value.id_user = iduser;
    value.id_post = idpost

    this.http.post<Comment>('http://localhost:85/post/'+idpost+'/comment', value,Header).subscribe((res:Comment)=>{
      
      this.dataRequestPost()
      
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

  updateComment(content:string, idcomment:number, idpost:number){


    let iduser = this.userservice.getUser().id;

    if (iduser === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['/login']);
      return;
    }

    let value = {
      id:idcomment,
      content:content,
      id_post:idpost,
      id_user:iduser,
      user:this.userservice.getUser()
    }
    console.log(value);

    this.http.put<Comment>('http://localhost:85/post/comment/update/'+idcomment,value,Header).subscribe((res:Comment)=>{

      this.dataRequestPost();

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

}