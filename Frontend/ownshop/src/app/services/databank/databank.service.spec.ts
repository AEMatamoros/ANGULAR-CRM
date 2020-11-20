import { TestBed } from '@angular/core/testing';

import { DatabankService } from './databank.service';

describe('DatabankService', () => {
  let service: DatabankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
