import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ArtistsService {

  constructor(private http: Http) { }

  getAllBands() {
    return this.http.get('/api/artists');
  }

}
