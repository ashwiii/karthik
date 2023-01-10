import { TestBed } from '@angular/core/testing';

import { FristService } from './frist.service';

describe('FristService', () => {
  let service: FristService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FristService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
