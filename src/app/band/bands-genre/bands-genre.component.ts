import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bands-genre',
  templateUrl: './bands-genre.component.html',
  styleUrls: ['./bands-genre.component.css']
})
export class BandsGenreComponent implements OnInit {

  genres: Array<any>
  bandsByGenre: Array<any>

  constructor() { }

  ngOnInit() {
    this.fillGenres()
  }

  searchBands(genre: object) {
    this.bandsByGenre = [
      { name: 'Metallica', country: 'Unknown', genre: 'Metal', status: 'Active' }
    ]
  }

  fillGenres() {
    this.genres = [
      { name: 'Black' },
      { name: 'Death' },
      { name: 'Doom/Stoner/Sludge' },
      { name: 'Electronic/Industrial' },
      { name: 'Experimental/Avant-garde' },
      { name: 'Folk/Viking/Pagan' },
      { name: 'Gothic' },
      { name: 'Grindcore' },
      { name: 'Groove' },
      { name: 'Heavy' },
      { name: 'Metalcore/Deathcore' },
      { name: 'Power' },
      { name: 'Progressive' },
      { name: 'Speed' },
      { name: 'Symphonic' },
      { name: 'Thrash' }
    ]
  }

}
