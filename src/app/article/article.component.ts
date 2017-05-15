import { Component, OnInit, Input} from '@angular/core';
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
  articles : Article[];

  constructor() {
    this.articles = [
      new Article( 'Angular 2', 'http://angular2.io',10),
      new Article( 'React.js', 'http://reactjs.io',20),
      new Article( 'vue.js', 'http://vue.io',5)
    ]
   }

  ngOnInit() {
  }
  
  // voteUp():boolean{ 
  //     this.article.voteUp();
  //     return false; // the return should return false, otherwise the page would be refreshed
  // }
  
  // voteDown():boolean{
  //   this.article.voteDown();
  //   return false; // the return should return false, otherwise the page would be refreshed
  // }

}
