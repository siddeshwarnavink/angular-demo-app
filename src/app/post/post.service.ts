import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from '../interface/Post';

@Injectable()
export class PostService {
  private baseURL: string = "https://jsonplaceholder.typicode.com";

  postLoading = false;
  postList: Post[] = [
    { id: 1, title: 'Hello', content: 'my awesome content' },
    { id: 2, title: 'Hello again', content: 'nothing to see here :(' },
  ];

  constructor(private http: HttpClient) { }

  fetchPosts() {
    this.postLoading = true;

    this.http.get(`${this.baseURL}/posts`)
      .subscribe(response => {
        this.postLoading = false;

        if (Array.isArray(response)) {
          this.postList = response.slice(0, 10).map((responseItem) => {
            return {
              ...responseItem,
              content: responseItem.body
            }
          })
        }
      });
  }

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

    this.http.patch(`${this.baseURL}/posts/${postId}`, {
      title: newPost.title,
      body: newPost.content
    })
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(postId: Number) {
    this.postList = this.postList.filter(postItem => {
      return postItem.id !== postId;
    });

    this.http.delete(`${this.baseURL}/posts/${postId}`)
      .subscribe(response => {
        console.log(response);
      });
  }

  addPost(newPost: Post) {
    this.postList.unshift({
      ...newPost,
      id: this.postList[this.postList.length - 1].id + 1,
    });

    this.http.post(`${this.baseURL}/posts`, {
      title: newPost.title,
      body: newPost.content
    })
      .subscribe((response: any) => {
        console.log(response);

        this.postList[0].id = response.id;
      });
  }
}
