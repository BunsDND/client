import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post_i } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll()  {
    return this.http.get<Post_i[]>('http://localhost:3000/post');
  }

  
}
