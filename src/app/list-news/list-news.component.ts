import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
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
  titlePost: string
  key = 'data'
  reverse = true

  constructor(
    private newsService: NewService
    
  ) { }

  ngOnInit() {
    this.getAllNews() 
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe((resp: News[]) =>{     
      this.listNews = resp
    })
  }
  getId(id: number){ 
    environment.id = id
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
