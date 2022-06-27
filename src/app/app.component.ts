import { Component } from '@angular/core';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isModalOpen = false;

  toggleModalHandler() {    
    this.isModalOpen = !this.isModalOpen;
  }

  constructor(public postService: PostService) { }
}
