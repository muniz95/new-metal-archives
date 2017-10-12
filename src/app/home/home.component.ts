import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: Array<any>;
  additions: Array<any>;
  updates: Array<any>;

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

  private fillAdditions() {
    this.additions = [
      { title: 'Addition 1', date: new Date() },
      { title: 'Addition 2', date: new Date() },
      { title: 'Addition 3', date: new Date() },
      { title: 'Addition 4', date: new Date() },
      { title: 'Addition 5', date: new Date() },
      { title: 'Addition 6', date: new Date() },
      { title: 'Addition 7', date: new Date() },
      { title: 'Addition 8', date: new Date() },
      { title: 'Addition 9', date: new Date() },
      { title: 'Addition 10', date: new Date() }
    ];
  }

  private fillUpdates() {
    this.updates = [
      { title: 'Update 1', date: new Date() },
      { title: 'Update 2', date: new Date() },
      { title: 'Update 3', date: new Date() },
      { title: 'Update 4', date: new Date() },
      { title: 'Update 5', date: new Date() },
      { title: 'Update 6', date: new Date() },
      { title: 'Update 7', date: new Date() },
      { title: 'Update 8', date: new Date() },
      { title: 'Update 9', date: new Date() },
      { title: 'Update 10', date: new Date() }
    ];
  }

}
