import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from '../shared/interface';

@Injectable()
export class PostService {
  private baseURL: string = "https://jsonplaceholder.typicode.com";

  postLoading = false;
  postList: Post[] = [];

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
              content: responseItem.body,
              isFav: false
            }
          })
        }
      });
  }

  getPosts() {
    return this.postList.filter(postItem => {
      return !postItem.isFav;
    });
  }

  getFavPosts() {
    return this.postList.filter(postItem => {
      return postItem.isFav;
    });
  }

  editPost(postId: Number, newPost: Post) {
    const editPostIndex = this.postList.findIndex(postItem => {
      return postItem.id === postId;
    });

    this.postList[editPostIndex] = {
      ...newPost,
      id: this.postList[editPostIndex].id,
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
    const postId = this.postList.length > 0 ? this.postList[this.postList.length - 1].id + 1 : 0
    this.postList.unshift({
      ...newPost,
      id: postId,
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

  toggleFav(postId: number) {
    const editPostIndex = this.postList.findIndex(postItem => {
      return postItem.id === postId;
    });

    this.postList[editPostIndex] = {
      ...this.postList[editPostIndex],
      isFav: !this.postList[editPostIndex].isFav
    }
  }
}
