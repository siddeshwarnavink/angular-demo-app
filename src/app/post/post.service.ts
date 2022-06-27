import { Injectable } from '@angular/core';

interface Post {
  id: Number,
  title: String,
  content: String
}

@Injectable()
export class PostService {
  postList: Post[] = [
    { id: 1, title: 'Hello', content: 'my awesome content' },
    { id: 2, title: 'Hello again', content: 'nothing to see here :(' },
  ];

  getPosts() {
    return this.postList;
  }

  editPost(postId: Number, newPost: Post) {
    this.postList = this.postList.map(postItem => {
      if (postItem.id !== postId) return postItem;
      return newPost;
    });
  }

  deletePost(postId: Number) {
    this.postList = this.postList.filter(postItem => {
      return postItem.id !== postId;
    });
  }

  constructor() { }
}
