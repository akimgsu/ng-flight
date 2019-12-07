import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() origins: string[];
  @Output() searchRequest: EventEmitter<string> = new EventEmitter<string>();

  public origin: string;

  txtFormControl: FormControl;
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.txtFormControl = new FormControl('', [
      Validators.required
    ]);
    this.filteredOptions = this.txtFormControl.valueChanges
      .pipe(
        startWith(''),
        map(val => val.length >= 1 ? this.filter(val) : [])
      );
  }

  filter(val: string): string[] {
    return this.origins.filter(option =>
      option.indexOf(val.toUpperCase()) === 0);
  }

  public btnSearch() {
    if (!this.txtFormControl.value) {
      return false;
    }
    this.searchRequest.emit(this.txtFormControl.value);
  }

}
