import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from '../model/Comments';
import { News } from '../model/News';
import { CommentsService } from '../service/comments.service';
import { NewService } from '../service/new.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  news: News = new News()
  listNews: News[]
  listComments: Comments[]
  @Input() private idNews: number

  constructor(
    private router: Router,
    private newsService: NewService,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {

    this.getAllNews()
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe((resp: News[]) =>{
      console.log(resp)
      this.listNews = resp
    })
  }
  getId(id: number){
    this.idNews = id
    // this.getByIdComents(this.idNews)
    
  }

  getByIdComments(id: number){
    this.commentsService.getByIdNews(id).subscribe((resp: Comments[]) =>{
      console.log(resp)
      this.listComments = resp
    })
    return
  }
}
