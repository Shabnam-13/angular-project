import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { IComment } from '../_models/comment';
import { IPost } from '../_models/post';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPostById(postId: number): Observable<IPost> {
    return this.http.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }

  getPostCommentsById(postId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
  }
}
