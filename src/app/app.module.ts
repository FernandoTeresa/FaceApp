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
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UpdateCommentsComponent } from './components/update-comments/update-comments.component';
import { PostsComponent } from './components/posts/posts.component';
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
    UpdateUserComponent,
    FileUploadComponent,
    UpdateCommentsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AppComponent, ListPostsComponent, PostComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
