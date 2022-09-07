import { TestBed } from '@angular/core/testing';

import { LuminariaService } from './luminaria.service';

describe('LuminariaService', () => {
  let service: LuminariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuminariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
