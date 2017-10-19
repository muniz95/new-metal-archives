import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rip',
  templateUrl: './rip.component.html',
  styleUrls: ['./rip.component.css']
})
export class RipComponent implements OnInit {

  decayedArtists: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.fillDecayedArtists()
  }

  fillDecayedArtists() {
    this.decayedArtists = [
      {
        name: 'Igor Kharlamov',
        country: 'Russia',
        bands: 'Кро - маньон',
        date: 'Oct 10th, 2017',
        cause: 'N/A'
      }, {
        name: 'Alexander Szczygiel',
        country: 'Poland',
        bands: 'Spirits Engaged, Vice Human, Crimson Fire, etc.',
        date: 'Oct 9th, 2017',
        cause: 'Heart attack'
      }, {
        name: 'Nadir Chanyshev',
        country: 'Russia',
        bands: 'Ария, Легион, Margenta, etc.',
        date: 'Oct 5th, 2017',
        cause: 'N/A'
      }, {
        name: 'Roddy B	Brazil',
        country: 'Atlantis',
        bands: 'Knight, Heavenly Kingdom, Tailgunners, etc.',
        date: 'Oct 5th, 2017',
        cause: 'Cancer'
      }, {
        name: 'Dani Kansanaho',
        country: 'Finland',
        bands: 'Shrouded',
        date: 'Oct 5th, 2017',
        cause: 'N/A'
      }
    ]
  }

}
