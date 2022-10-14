import { UserService } from 'src/app/services/user.service';
import { User } from './../classes/user';
import { CommentsComponent } from './../components/comments/comments.component';
import { Comment} from './../classes/comment';
import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommaExpr } from '@angular/compiler';


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

  private _comment: Comment | null = null;
  public get comment(): Comment | null {
    return this._comment;
  }
  public set comment(value: Comment | null) {
    this._comment = value;
  }


  constructor(private http: HttpClient, private router: Router, public userservice:UserService) { }

  dataRequestPost() {
    //faz um pedido get ao url e guarda os dados no array de objectos do tipo Post
    //para começar o pedido utilizamos o subscribe, guarda a info no res
    this.http.get<Post[]>('http://localhost:8000/posts').subscribe((res: Post[]) => {
      // vai iterar o res em todos os indices que possui
      this.posts= []
      for (let i = 0; i < res.length; i++) { 
        //declarei uma variavel com o res[i] para facilitar e melhorar a programaçao e o entendimento do codigo
        let a = res[i];
        //popular o objecto post do tipo Post
        console.log(a)
        let post: Post = new Post(a.id, a.title, a.content, new Date(a.date), a.id_user, a.user, a.comments);
        //vai guardar o objeto no array de objetos posts
        this.posts.push(post);
     
      }
    });
  }

  getPost() {
    //retorna os posts que existem no array de objetos
    return this.posts;
  }

  addPost(value: Post) {
    //guarda o id do user ou senao houver guarda null
    let iduser = this.userservice.user?.id || null;
    //se o iduser for null manda um alerta do erro e retorna para a pagina inicial
    if (iduser === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['']);
      return;
    }
    //na proprieda comments sendo um array é inicializado com vazio
    value.comments = [];
    //guarda o id do user do objeto que vem por paramtro do metodo
    value.id_user= iduser;
    //faz um pedido post ao endpoint com expectativa de o retorno ser do tipo Postcom o objeto  
    //value como parametro (no body) e guarda os dados no objecto res do tipo Post
    //para começar o pedido utilizamos o subscribe, guarda a info no res
    this.http.post<Post>('http://localhost:8000/post', value).subscribe((res:Post)=>{
      // é populado o objeto post do tipo Post
      //guarda o objeto post no array de objetos posts
      this.dataRequestPost()
      //se houver um erro no pedido fazer o tratamento para o tipo do erro
    },(err) => {

      //no erro é devolvido o status e cada tipo de erro o alert para esse mesmo
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
    //guarda o id do user ou senao houver guarda null
    let iduser = this.userservice.user?.id || null;
    //se o iduser for null manda um alerta do erro e retorna para a pagina inicial
    if (iduser === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['']);
      return;
    }

    let posts = this.getPost();
    console.log(posts);
    this.http.delete<Post>('http://localhost:8000/post/'+idPost).subscribe((res:Post)=>{
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

  getPostsUser(){
    //inicializa o objeto como vazio
    this.postsid = []
    let iduser = this.userservice.user?.id;
    
    console.log(iduser);
    //faz um pedido get ao url com o parametro do id do user que esta logado que sera enviado no body
    //e guarda os dados no array de objectos do tipo Post
    //para começar o pedido utilizamos o subscribe, guarda a info no array res do tipo Post
    this.http.get<Post[]>('http://localhost:8000/posts/user/'+iduser).subscribe((res: Post[]) => {
    
    //vai iterar o array de objetos ate ao ultimo indice do array
    for (let i=0; i<res.length;i++){
      // vai popular o objeto post para cada indice
      let post = new Post(res[i].id, res[i].title, res[i].content, res[i].date, res[i].id_user, res[i].user, res[i].comments);
      // guarda o objeto post no array de objetos postsid
      this.postsid.push(post);
    }
    });
  }

  //recebe como argumentos o objeto value do tipo Comment e uma variavel idpost do tipo number
  addcomments(value: Comment, idpost: number){

    let local_user = localStorage.getItem('user');

    if (local_user != null){
      local_user = JSON.parse(local_user);
    }

    let iduser = this.userservice.user?.id || null;

    if (iduser === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['']);
      return;
    }

    if (local_user === null){
      alert('ERROR!! you have to be log');
      this.router.navigate(['']);
      return;
    }

    value.id_user = iduser;
    value.id_post = idpost
    value.date = new Date();
    
    console.log(local_user);

    this.http.post<Comment>('http://localhost:8000/post/'+idpost+'/comment', value).subscribe((res:Comment)=>{
      // é populado o objeto post do tipo Post
      //guarda o objeto post no array de objetos posts
      this.dataRequestPost()

      //se houver um erro no pedido fazer o tratamento para o tipo do erro
    },(err) => {

      //no erro é devolvido o status e cada tipo de erro o alert para esse mesmo
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
    
    // //declarado um objeto user do tipo User e as suas propriedas preenchidas
    // let user: User = {
    //   id: 6,
    //   username: 'pipi_rasgada',
    //   password: '',
    //   first_name: 'PiPi',
    //   last_name: 'Meia Rasgada',
    // }
    // //vai gerar um numero inteiro de 8 a 20 e guarda esse valor em value.id para simular um id do comentario
    // value.id = Math.floor(Math.random() * (20 - 8) + 8);
    // // vai guardar esse valor em value.id_user para simular o id do utilizador desse comentario
    // value.id_user = 6;
    // // vai guardar a data e hora atual em value.date
    // value.date = new Date();
    // //vai guardar o objeto user antes declarado na propriedade .user do objeto value
    // value.user = user;
    // //vai guardar na variavel post a procura no array de objetos em que coincida o id dos posts com o idpost que veio como argumento
    // let post = this.posts.find(item => item.id === idpost);
    // //se a variavel post tiver dados chama o metodo addcoment e envia como argumento o value
    // if (post != undefined){
    //   post.addComment(value);
    // }
  }
}