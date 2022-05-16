import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../../_models/post';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  public posts: IPost[];
  constructor(private apiService: ApiService ) {}

  ngOnInit() {
    const myObserver = {
      next: (data: IPost[]) => this.posts = data,
      error: (err: Error) => console.error(err),
      complete: () => console.log('Observer got a complete notification'),
    };
    
    this.apiService.getPosts().subscribe(myObserver);
  }
}
