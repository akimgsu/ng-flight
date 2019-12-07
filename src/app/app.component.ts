import { FlightApiService } from './services/flight-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public originLocation: string[];
  public flights: any;

  constructor(
    private flightApi: FlightApiService
    ) {
  }

  ngOnInit() {
    this.getOriginLocation();
  }

  async getOriginLocation(){
    await this.flightApi.getOriginLocation().subscribe((res) => {
      this.originLocation = Object.keys(res).map((k) => res[k]);
    });
  };

  async getOriginRequest(origin: string){
    await this.flightApi.getFlightsByOrigin(origin).subscribe((res) => {
      this.flights = res;
    });
  };

}


