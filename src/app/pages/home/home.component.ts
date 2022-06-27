import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

import { PostService } from 'src/app/post/post.service';
import { flyInOut } from 'src/app/shared/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('flyInOut', flyInOut)
  ]
})
export class HomeComponent implements OnInit {

  isModalOpen = false;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    if (this.postService.postList.length < 1) {
      this.postService.fetchPosts();
    }
  }

  toggleModalHandler() {
    this.isModalOpen = !this.isModalOpen;
  }

}
