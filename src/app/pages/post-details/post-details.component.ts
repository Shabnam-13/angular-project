import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../../_models/comment';
import { IPost } from '../../_models/post';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  // styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  public id: number = 0;
  public comments: IComment[];
  public post: IPost = {
    title: '',
    body: '',
    comments: [],
    userId: this.id,
    id: 0,
  };
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const myObserver = {
      next: (data: IPost) => (this.post = data),
      error: (err: Error) => console.error(err),
    };

    const myComments = {
      next: (data: IComment[]) => (this.comments = data),
      error: (err: Error) => console.error(err),
    };

    this.getComments(myComments);

    this.getPost(myObserver);
  }

  ngOnInit() {}

  getPost(myObserver): void {
    this.apiService.getPostById(this.id).subscribe(myObserver);
  }

  getComments(myComments): void {
    this.apiService.getPostCommentsById(this.id).subscribe(myComments);
  }
}
