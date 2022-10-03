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

const appRoutes: Routes = [ 
  { path: 'List Posts', component: ListPostsComponent }, 
  { path: 'Add Posts', component: PostComponent },
  { path: '**', component: NotFoundComponent }
];  

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListPostsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppComponent, ListPostsComponent, PostComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
