import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home-latest-reviews',
  templateUrl: './home-latest-reviews.component.html',
  styleUrls: ['./home-latest-reviews.component.css']
})
export class HomeLatestReviewsComponent implements OnInit {

  reviews: Array<any>

  constructor() { }

  ngOnInit() {
    this.fillReviews()
  }

  private fillReviews() {
    this.reviews = [
      {
        band: 'Crowbar',
        album: 'Obedience thru...',
        date: 'Oct 11th'
      }, {
        band: 'Blathudah',
        album: 'Blathudah',
        date: 'Oct 11th'
      }, {
        band: 'Chaos',
        album: 'The Unknown',
        date: 'Oct 11th'
      }, {
        band: 'Evergreen Refuge',
        album: 'Fungal',
        date: 'Oct 11th'
      }, {
        band: 'Crimson Glory',
        album: 'Strange and...',
        date: 'Oct 11th'
      }, {
        band: 'Primal Scream NYC',
        album: 'Volume One',
        date: 'Oct 10th'
      }, {
        band: 'Spirit Adrift',
        album: 'Curse of Conception',
        date: 'Oct 10th'
      }, {
        band: 'Shatter Messiah',
        album: 'Orphans of Chaos',
        date: 'Oct 10th'
      }, {
        band: 'Zedekiah',
        album: 'Karma',
        date: 'Oct 10th'
      }, {
        band: 'Watch My Dying',
        album: 'Klausztrofónia',
        date: 'Oct 10th'
      }, {
        band: 'Annex',
        album: 'Powers That Be',
        date: 'Oct 10th'
      }, {
        band: 'Manilla Road',
        album: 'Crystal Logic',
        date: 'Oct 10th'
      }, {
        band: 'Nadja',
        album: 'The Stone Is Not...',
        date: 'Oct 10th'
      }, {
        band: 'Mystic Circle',
        album: 'Damien',
        date: 'Oct 9th'
      }, {
        band: 'The Black Dahlia Murder',
        album: 'Nightbringers',
        date: 'Oct 9th'
      }, {
        band: 'Pagan Altar',
        album: 'The Room of Shadows',
        date: 'Oct 9th'
      }, {
        band: 'Portrait',
        album: 'Burn the World',
        date: 'Oct 9th'
      }, {
        band: 'Cradle of Filth',
        album: 'Cryptoriana - The...',
        date: 'Oct 9th'
      }, {
        band: 'Excoriate',
        album: '...of the Ghastly...',
        date: 'Oct 8th'
      }, {
        band: 'Anthem',
        album: 'Bound to Break',
        date: 'Oct 8th'
      }
    ]
  }

}
