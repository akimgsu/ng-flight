import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightApiService {

  private BASE_URL = 'http://127.0.0.1:4000/';

  constructor(private http: HttpClient) { }

  public getOriginLocation() {
    return this.http.get(this.BASE_URL + 'origin');
  }

  public getFlightsByOrigin(origin: string){
    return this.http.get(this.BASE_URL + `flights/${origin}`);
  }
}
