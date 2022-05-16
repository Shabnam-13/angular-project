import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../../_models/comment';
import { IPost } from '../../_models/post';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  public id: number;
  public post: IPost;
  public commments: IComment[];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.getPost();
    this.getComments();
  }

  ngOnInit() {}

  getPost(): void {
    this.apiService.getPostById(this.id).subscribe((data) => {
      this.post = data;
    });
  }

  getComments(): void {
    this.apiService.getPostCommentsById(this.id).subscribe((data) => {
      this.commments = data;
    });
  }
}
