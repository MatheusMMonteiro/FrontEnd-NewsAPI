import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Comments } from '../model/Comments';
import { News } from '../model/News';
import { CommentsService } from '../service/comments.service';
import { NewService } from '../service/new.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  news: News = new News()
  
  listComments: Comments[]
  comments: Comments = new Comments()
  id: number = environment.id
  
  constructor(
    private commentsService: CommentsService,
    private newsService: NewService
  ) { }

  ngOnInit(  ){    
    this.getCommentsById(environment.id)
    this.getNewsById(environment.id)
  }

  getCommentsById(id: number){
    this.commentsService.getByIdNews(id).subscribe((resp: Comments[]) =>{      
      this.listComments = resp      
    })
  }

  getNewsById(id: number){
    this.newsService.getById(id).subscribe((resp: News) =>{
      this.news = resp
    })
  }

  
  }

