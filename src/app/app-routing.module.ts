import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';

// cria as rotas da aplicação 
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: ListPostsComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'post', component: PostComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'posts/:id', component: ListPostsComponent},
  { path: 'profile', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }