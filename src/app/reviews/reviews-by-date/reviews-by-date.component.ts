import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-reviews-by-date',
  templateUrl: './reviews-by-date.component.html',
  styleUrls: ['./reviews-by-date.component.css']
})
export class ReviewsByDateComponent implements OnInit {

  dateRange: Array<Date> = []
  reviews: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.fillDateRange()
    this.fillReviews()
  }

  private fillDateRange() {
    const dateArray = [];
    const stopDate = moment(new Date()).add(1, 'months');
    // Months start with zero
    let currentDate = moment(new Date(2002, 6, 15));
    while (currentDate <= stopDate) {
      this.dateRange.push(new Date(moment(currentDate).format('YYYY-MM-DD')))
      currentDate = moment(currentDate).add(1, 'months');
    }
    this.dateRange.reverse()
  }

  private fillReviews() {
    this.reviews = [
      { url: '1', band: 'Metallica', album: 'Ride The Lightning', rating: 100, author: 'diamhea', time: '17:55' },
      { url: '2', band: 'Metallica', album: 'Ride The Lightning', rating: 100, author: 'diamhea', time: '17:55' },
      { url: '3', band: 'Metallica', album: 'Ride The Lightning', rating: 100, author: 'diamhea', time: '17:55' },
      { url: '4', band: 'Metallica', album: 'Ride The Lightning', rating: 100, author: 'diamhea', time: '17:55' },
      { url: '5', band: 'Metallica', album: 'Ride The Lightning', rating: 100, author: 'diamhea', time: '17:55' }
    ]
  }

}
