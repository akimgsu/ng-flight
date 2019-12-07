
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FlightApiService } from './services/flight-api.service';
import { OriginListComponent } from './origin-list/origin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OriginListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    FlightApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
