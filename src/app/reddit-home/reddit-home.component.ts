import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit-home',
  templateUrl: './reddit-home.component.html',
  styleUrls: ['./reddit-home.component.css']
})
export class RedditHomeComponent implements OnInit {  

  constructor() { }

  ngOnInit() {
  }
    
 addArticle(title:HTMLInputElement, link:HTMLInputElement): void {
    console.log(`[reddit-home.component] button clicked-> title=${title.value}, link=${link.value}`);
  }
}
