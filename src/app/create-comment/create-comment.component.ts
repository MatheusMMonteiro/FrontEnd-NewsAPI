import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Comments } from '../model/Comments';
import { News } from '../model/News';
import { CommentsService } from '../service/comments.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  news: News = new News()
  comments: Comments = new Comments()
  idNews: number
  constructor(
    private commentsService: CommentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.idNews = this.route.snapshot.params['id']
    
    document.getElementById("buttonModal")?.click()
  }
  registerComments(){
    this.news.id = this.idNews
    this.comments.news = this.news
    this.commentsService.postComments(this.comments).subscribe((resp: Comments) =>{  
      console.log(this.comments)
      alert('Comments create successfuly')
      this.comments = new Comments()
      this.router.navigate(['/list-news'])

    })

}
}