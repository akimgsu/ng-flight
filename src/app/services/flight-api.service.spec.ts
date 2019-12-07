import { TestBed } from '@angular/core/testing';

import { FlightApiService } from './flight-api.service';

describe('FlightApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightApiService = TestBed.get(FlightApiService);
    expect(service).toBeTruthy();
  });
});
