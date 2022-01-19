import { splitAtColon } from '@angular/compiler/src/util';
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
  idNews: number
  titlePost: string

  constructor(
    private router: Router,
    private newsService: NewService,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {

    this.getAllNews()
    
    console.log(this.idNews)
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe((resp: News[]) =>{     
      this.listNews = resp
    })
  }
  getId(id: number){    
    console.log(id)
    this.idNews = id
  }

  getByIdComments(id: number){
    this.commentsService.getByIdNews(id).subscribe((resp: Comments[]) =>{
      console.log(resp)
      this.listComments = resp
    })
  }
  findByTitleNews(){
    if(this.titlePost == ''){
      this.getAllNews()
    }
    else{
      this.newsService.getByTitle(this.titlePost).subscribe((resp: News[]) =>{
        this.listNews = resp
      })
    }
    
  }
}
