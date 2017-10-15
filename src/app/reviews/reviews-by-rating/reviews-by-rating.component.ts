import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-reviews-by-rating',
  templateUrl: './reviews-by-rating.component.html',
  styleUrls: ['./reviews-by-rating.component.css']
})
export class ReviewsByRatingComponent implements OnInit {

  ratingRange: Array<string> = []
  reviews: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.fillRatingRange()
    this.fillReviews()
  }

  private fillRatingRange() {
    let previousRating = 0;
    let currentRating = 5;
    while (currentRating <= 100) {
      this.ratingRange.push(`${previousRating} - ${currentRating}`)
      previousRating = currentRating + 1
      currentRating += 5
    }
    this.ratingRange.reverse()
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
