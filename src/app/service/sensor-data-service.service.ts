import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorDataServiceService {
  uri = 'http://localhost:3000/api';
  constructor(private http :HttpClient) { }

  getSensorDataById(shelfId) {
    return this.http.get(`${this.uri}/sensor/${shelfId}`);
   }
}


