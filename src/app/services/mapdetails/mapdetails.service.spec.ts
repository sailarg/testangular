import { TestBed } from '@angular/core/testing';

import { MapdetailsService } from './mapdetails.service';

describe('MapdetailsService', () => {
  let service: MapdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
