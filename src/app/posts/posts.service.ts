import { Injectable } from '@angular/core'
import { Post } from './post.model';
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class PostsService {
  private posts: Post[] = []
  private PostsUpdated = new Subject<Post[]>()
  getPost() {
    return [...this.posts];
  }
  getPostUpdatedListner() {
    return this.PostsUpdated.asObservable()
  }
  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content }
    this.posts.push(post)
    this.PostsUpdated.next([...this.posts])
  }
}
