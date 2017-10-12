import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../shared/services/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: any = [];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.artists = [
      {
        name: 'Steve harris',
        instruments: 'Bass'
      }
    ]
  }

}
