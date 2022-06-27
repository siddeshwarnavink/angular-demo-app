import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

import { PostService } from 'src/app/post/post.service';
import { flyInOut } from 'src/app/shared/animations';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  animations: [
    trigger('flyInOut', flyInOut)
  ]
})
export class FavoritesComponent implements OnInit {
  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

}
