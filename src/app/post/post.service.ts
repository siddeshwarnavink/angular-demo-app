import { Injectable } from '@angular/core';

import { Post } from '../interface/Post';

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
    const editPostIndex = this.postList.findIndex(postItem => {
      return postItem.id === postId;
    });

    this.postList[editPostIndex] = {
      ...newPost,
      id: this.postList[editPostIndex].id
    }
  }

  deletePost(postId: Number) {
    this.postList = this.postList.filter(postItem => {
      return postItem.id !== postId;
    });
  }

  addPost(newPost: Post) {
    this.postList.unshift({
      ...newPost,
      id: this.postList[this.postList.length - 1].id + 1,
    });
  }

  constructor() { }
}
