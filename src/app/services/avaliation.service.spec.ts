import { TestBed } from '@angular/core/testing';

import { AvaliationService } from './avaliation.service';

describe('AvaliationService', () => {
  let service: AvaliationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
