import { Component } from '@angular/core';

import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {

  constructor(
    public postService: PostService,
  ) { }

  activeLinkIndex = -1;
  navLinks = [
    {
      label: 'Home',
      link: './home',
      index: 0
    }, {
      label: 'Favorites',
      link: './favorites',
      index: 1
    },
  ];
}
