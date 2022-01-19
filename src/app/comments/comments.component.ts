import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Comments } from '../model/Comments';
import { CommentsService } from '../service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  listComments: Comments[]
  comments: Comments = new Comments()
  
  constructor(
    private commentsService: CommentsService,
  ) { }

  ngOnInit(  ){    
    this.getCommentsById(environment.id)
  }

  getCommentsById(id: number){
    this.commentsService.getByIdNews(id).subscribe((resp: Comments[]) =>{      
      this.listComments = resp      
    })
  }
  
  }

