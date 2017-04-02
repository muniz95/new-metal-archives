import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BandsService {

  constructor(private http: Http) { }

  getAllBands() {
    return this.http.get('/api/bands')
      .map(res => res.json());
  }

}
