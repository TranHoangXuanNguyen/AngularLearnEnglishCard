import { TestBed } from '@angular/core/testing';

import { EnglishCardService } from './english-card.service';

describe('EnglishCardService', () => {
  let service: EnglishCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnglishCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
