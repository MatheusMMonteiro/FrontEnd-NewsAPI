import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../model/News';
import { NewService } from '../service/new.service';

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.css']
})
export class DeleteNewsComponent implements OnInit {

  news: News = new News()
  idNews: number
  constructor(
    private newsService: NewService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.idNews = this.route.snapshot.params['id']
    this.getByIdNews(this.idNews)

  }

  getByIdNews(id: number){
    this.newsService.getById(id).subscribe((resp: News) =>{
      this.news = resp  
    })
  }

  delete(){
    this.newsService.deleteNews(this.idNews).subscribe(() =>{
      alert('News deleted successfuly')
      this.router.navigate(['/create-news'])
    })
  }

}
