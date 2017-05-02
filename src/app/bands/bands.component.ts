import { Component, OnInit } from '@angular/core';
import { BandsService } from '../bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  bands: any = [];

  constructor(private bandsService: BandsService) { }

  ngOnInit() {
    this.bands = [
      {
        name: 'Metallica',
        genre: 'Thrash Metal',
        status: 'Active'
      },
      {
        name: 'Black Sabbath',
        genre: 'Heavy/Doom Metal',
        status: 'Split-up'
      }
    ];

    this.bandsService.getAllBands().subscribe(bands => this.bands = bands);
  }

}
