import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../model/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
 
  constructor(private http: HttpClient) { }

  getByIdNews(id: number): Observable<Comments[]>{
    return this.http.get<Comments[]>(`http://localhost:8080/comments/id/${id}`);
  }

  postComments(comments: Comments): Observable<Comments>{
    return this.http.post<Comments>("http://localhost:8080/comments/register", comments);
  }
}
