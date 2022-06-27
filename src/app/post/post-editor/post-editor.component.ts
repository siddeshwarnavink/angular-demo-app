import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent {
  @Input() postId: Number | null = null
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  title = ""
  content = ""

  onCancelHandler() {
    this.onCancel.emit();
  }

  onSubmitHandler() {
    this.onSubmit.emit();

    if (this.postId) {
      // ...
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

  constructor(private postService: PostService) { }
}
