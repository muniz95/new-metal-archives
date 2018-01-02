import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'app/shared/models/album';

@Component({
  selector: 'app-band-discography',
  templateUrl: './band-discography.component.html',
  styleUrls: ['./band-discography.component.css']
})
export class BandDiscographyComponent implements OnInit {

  @Input() discography: Array<Album>;

  constructor() { }

  ngOnInit() {
  }

}
