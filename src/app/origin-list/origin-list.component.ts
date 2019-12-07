import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-origin-list',
  templateUrl: './origin-list.component.html',
  styleUrls: ['./origin-list.component.scss']
})
export class OriginListComponent implements OnInit {

  @Input() flights: Flight[];
  @ViewChild(MatSort) sort: MatSort;

  displayedCols: string[] = [
    'ID',
    'FLIGHT_NUM',
    'DEPART_TIME',
    'ORIGIN',
    'ORIGIN_FULL_NAME',
    'ARRIVE_TIME',
    'DESTINATION',
    'DESTINATION_FULL_NAME',
    'UPDATED_AT'
  ];

  public dataSource: any;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.flights);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.flights);
  }

}


interface Flight {
  created_at: string;
  destination: string;
  destination_full_name: string;
  flight_identifier: string;
  flt_num: string;
  id: string;
  in_gmt: string;
  off_gmt: string;
  on_gmt: string;
  origin: string;
  origin_full_name: string;
  out_gmt: string;
  scheduled_destination_gate: string;
  scheduled_origin_gate: string;
  updated_at: string;
}
