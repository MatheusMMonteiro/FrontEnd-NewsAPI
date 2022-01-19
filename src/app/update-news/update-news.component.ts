import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../model/News';
import { NewService } from '../service/new.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  news: News = new News()
  constructor(
    private newsService: NewService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id']
    this.getByIdNews(id)

  }

  getByIdNews(id: number){
    this.newsService.getById(id).subscribe((resp: News) =>{
      this.news = resp  
    })
  }

  update(){
    this.newsService.putNews(this.news).subscribe((resp: News) =>{
      this.news = resp  
      alert("News update successfuly")
      this.router.navigate(['/list-news'])
    })
  }
}

