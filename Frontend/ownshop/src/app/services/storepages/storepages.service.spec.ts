import { TestBed } from '@angular/core/testing';

import { StorepagesService } from './storepages.service';

describe('StorepagesService', () => {
  let service: StorepagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorepagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
