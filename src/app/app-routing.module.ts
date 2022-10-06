import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: '', component: LoginComponent},
  { path: 'list-posts', component: ListPostsComponent },
  { path: 'post', component: PostComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }