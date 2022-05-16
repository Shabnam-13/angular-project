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
  constructor(private apiService: ApiService) {
    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Finished');
      }
    );
  }

  ngOnInit() {}
}
