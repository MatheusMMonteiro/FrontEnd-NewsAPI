import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { News } from '../model/News';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<News[]>{
    return this.http.get<News[]>('http://localhost:8080/news');
  }

  getById(id: number): Observable<News>{
    return this.http.get<News>(`http://localhost:8080/news/id/${id}`);
  }

  getByTitle(title: string): Observable<News[]>{
    return this.http.get<News[]>(`http://localhost:8080/news/title/${title}`);
  }
  
  getByTags(tags: string): Observable<News[]>{
    return this.http.get<News[]>(`http://localhost:8080/news/tags/${tags}`);
  }

  postNews(news: News): Observable<News>{
    return this.http.post<News>("http://localhost:8080/news/register", news);
  }

  putNews(news: News): Observable<News>{
    return this.http.put<News>("http://localhost:8080/news/update", news);
  }

  deleteNews(id_news: number){
    return this.http.delete(`http://localhost:8080/news/delete/${id_news}`);
  }
}
