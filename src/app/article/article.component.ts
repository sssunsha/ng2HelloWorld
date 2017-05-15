import { Component, OnInit } from '@angular/core';
import { Article } from "app/article/article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  article : Article;

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular2.io',
      10
    )
   }

  ngOnInit() {
  }
  
  voteUp():boolean{
      this.article.voteUp();
      return false;
  }
  
  voteDown():boolean{
    this.article.voteDown();
    return false;
  }

}
