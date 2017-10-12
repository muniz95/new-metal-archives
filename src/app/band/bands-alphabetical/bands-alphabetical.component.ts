import { Component, OnInit } from '@angular/core';

const BANDS = [
  {name: 'Alestorm', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Anthrax', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Battlelore', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Black Sabbath', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Cannibal Corpse', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Coroner', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Danzig', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Dark Angel', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Emperor', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Eyehategod', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Fear Factory', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Flotsam And Jetsam', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Godflesh', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Grand Magus', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Helloween', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Hirax', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Iron Maiden', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Isis', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Jag Panzer', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Judas Priest', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Katatonia', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Krisiun', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Lamb Of God', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Lost Society', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Megadeth', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Metallica', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Napalm Death', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Neurosis', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Om', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Orchid', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Paradise Lost', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Prong', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Queensrÿche', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Quiet Riot', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Rhapsody Of Fire', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Rudra', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Sepultura', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Sodom', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Tankard', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Tuatha De Danann', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Ulver', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Unseen Terror', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Viper', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Voivod', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Whitechapel', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Wintersun', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'X-Japan', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Xentrix', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Yngwie J. Malmsteen', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Yun-Fat', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Zombie Ritual', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: 'Zyklone', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: '1349', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: '3 Inches Of Blood', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: '...and Oceans', country: 'Unknown', genre: 'Metal', status: 'Active'},
  {name: '쓰레기스트', country: 'Unknown', genre: 'Metal', status: 'Active'},
]

@Component({
  selector: 'app-bands-alphabetical',
  templateUrl: './bands-alphabetical.component.html',
  styleUrls: ['./bands-alphabetical.component.css']
})
export class BandsAlphabeticalComponent implements OnInit {

  bands: Array<any>

  constructor() { }

  ngOnInit() {
  }

  fetchBands(letter: string) {
    const bands = BANDS.filter(band => band.name.toLowerCase().startsWith(letter.toLowerCase()))
    console.log('====================================')
    console.log(bands)
    console.log('====================================')
    this.bands = bands
  }

}
