import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-by-alpha',
  templateUrl: './reviews-by-alpha.component.html',
  styleUrls: ['./reviews-by-alpha.component.css']
})
export class ReviewsByAlphaComponent implements OnInit {

  reviews: Array<any> = []

  constructor() { }

  ngOnInit() {
    this.fillReviews()
  }

  fetchRatings(letter: string) {
    console.log('====================================');
    console.log('To be implemented');
    console.log('====================================');
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
