import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

}
