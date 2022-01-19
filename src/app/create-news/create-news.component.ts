import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../model/News';
import { NewService } from '../service/new.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  news: News = new News()
  listNews: News[]
  title: string
  content: string
  author: string
  tags: string
  date: Date

  constructor(
    private newsService: NewService,
    private router: Router
  
  ) { }

  ngOnInit() {
    this.getAllNews()
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe((resp: News[]) =>{ 
      this.listNews = resp
    })
  }

  register(){
    this.newsService.postNews(this.news).subscribe((resp: News) =>{
      alert("News create successfuly")
      this.news = new News()
      this.getAllNews()
      this.router.navigate(['/create-news'])          
      
    })    
  }
}
