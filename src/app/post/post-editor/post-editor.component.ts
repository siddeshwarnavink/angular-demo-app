import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../../interface/Post';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  @Input() postId: Number | null = null
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  title = ""
  content = ""

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    if (this.postId) {
      const loadedPost: Post = this.postService.getPosts().find(postItem => {
        return postItem.id === this.postId
      }) || { id: -1, title: "", content: "" };

      this.title = loadedPost.title;
      this.content = loadedPost.content
    }
  }

  onCancelHandler() {
    this.onCancel.emit();
  }

  onSubmitHandler() {
    this.onSubmit.emit();

    if (this.postId) {
      this.postService.editPost(this.postId, {
        id: -1,
        title: this.title,
        content: this.content
      });
    } else {
      this.postService.addPost({
        id: -1,
        title: this.title,
        content: this.content
      })
    }

    this.title = '';
    this.content = '';
  }

}
