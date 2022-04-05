import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit , OnDestroy {
  // posts = [
  //   { title: 'First Post', content: 'This is first Post\s content' },
  //   { title: 'Scond Post', content: 'This is second Post\s content' },
  //   { title: 'Third Post', content: 'This is third Post\s content' }
  // ]
posts:Post[] = [];

//here the private key does not work so we put the negation for the tiomme being
private postsSub!:Subscription;

  constructor(public postsService:PostsService){}

  ngOnInit(){
     this.posts = this.postsService.getPost();
    this.postsSub = this.postsService.getPostUpdatedListner().subscribe((posts:Post [])=>{
       this.posts = posts;
     })

  }
  ngOnDestroy(){
    this.postsSub.unsubscribe()
  }

}
