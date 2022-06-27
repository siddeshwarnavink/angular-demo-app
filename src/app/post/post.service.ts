import { Injectable } from '@angular/core';

interface Post {
  id: Number,
  title: String,
  content: String
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList: Post[] = [
    { id: 1, title: 'Hello', content: 'my awesome content' },
    { id: 2, title: 'Hello again', content: 'nothing to see here :(' },
  ];

  getPosts() {
    return this.postList;
  }

  constructor() { }
}
