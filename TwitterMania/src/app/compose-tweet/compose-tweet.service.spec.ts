import { TestBed } from '@angular/core/testing';

import { ComposeTweetService } from './compose-tweet.service';

describe('ComposeTweetService', () => {
  let service: ComposeTweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeTweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
