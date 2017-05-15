import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  link: string;
  constructor() {
    this.title = "Angular 2";
    this.link = "http://angualr.io";
    this.votes = 10;
   }

  ngOnInit() {
  }
  
  voteUp():void{
    this.votes += 1;  
  }
  
  voteDown():void{
    this.votes -= 1;
  }

}
