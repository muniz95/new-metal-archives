import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class SharedNewsComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

}
