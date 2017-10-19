import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Array<any>;

  constructor() { }

  ngOnInit() {
    this.fillNews();
  }

  private fillNews() {
    this.news = [
      {
        title: '15 years!',
        date: new Date(2017, 7, 7),
        content: 'July 7, 2002: The first band was added to Metal Archives.',
        author: ['Zodijackyl', 'Azmodes']
      },
      {
        title: '9th M-A Reviews Challenge: 5th - 11th Jun 2017',
        date: new Date(2017, 6, 5),
        content: 'Greetings, all! It\'s that time of the year again - time for our classic MA Virgin Reviews Challenge!',
        author: ['Derigin']
      },
      {
        title: 'Maintenance',
        date: new Date(2017, 5, 8),
        content: 'The site will be going down for some quick maintenance around 11:30 PM EDT / 3:30 AM UTC.',
        author: ['HellBlazer']
      }
    ];
  }

}
