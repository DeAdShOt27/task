import { TestBed } from '@angular/core/testing';

import { TransmitionService } from './transmition.service';

describe('TransmitionService', () => {
  let service: TransmitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
