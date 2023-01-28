import { TestBed } from '@angular/core/testing';

import { NeuenService } from './neuen.service';

describe('NeuenService', () => {
  let service: NeuenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeuenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
