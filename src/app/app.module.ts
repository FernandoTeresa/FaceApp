import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { FormsModule } from '@angular/forms';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsidComponent } from './components/postsid/postsid.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListPostsComponent,
    NotFoundComponent,
    CommentsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PostsidComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppComponent, ListPostsComponent, PostComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
