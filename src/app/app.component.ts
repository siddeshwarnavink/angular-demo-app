import { Component } from '@angular/core';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postService;

  constructor(postService: PostService) { 
    this.postService = postService;
  }
}
