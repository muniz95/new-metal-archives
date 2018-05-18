import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class BandsService {

  constructor(private http: Http) { }

  getAllBands() {
    return this.http.get('/api/bands');
  }

}
