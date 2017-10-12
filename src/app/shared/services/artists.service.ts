import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistsService {

  constructor(private http: Http) { }

  getAllBands() {
    return this.http.get('/api/artists')
      .map(res => res.json());
  }

}
