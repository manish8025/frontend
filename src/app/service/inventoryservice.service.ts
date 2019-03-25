import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryserviceService {

  constructor(private http :HttpClient) {
    
   }
   getInventoryFromSesor() {
     return this.http.get('http://localhost:8000/ishelf/inventory/');
   }

   updateShelfValueInSensor(request : any) {
     return this.http.post('http://localhost:8000/ishelf/inventory/',request);
   }
}
