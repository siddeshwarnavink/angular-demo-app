import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() id!: number;
  @Input() title!: String;
  @Input() content!: String;

  constructor(private postService: PostService) { }

  editPostHandler() {
    this.postService.editPost(this.id, {
      id: this.id,
      title: 'Updated',
      content: 'This is cool!'
    });
  }

  deletePostHandler() {
    this.postService.deletePost(this.id);
  }

}
