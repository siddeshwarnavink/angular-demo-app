import { Component } from '@angular/core';

interface Post {
  id: Number,
  title: String,
  content: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postList: Post[] = [
    {id: 1, title: 'Hello', content: 'my awesome content'},
    {id: 2, title: 'Hello again', content: 'nothing to see here :('},
  ]
}
