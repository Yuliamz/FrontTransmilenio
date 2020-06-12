import { TestBed } from '@angular/core/testing';

import { Random.RandomService } from './random.random.service';

describe('Random.RandomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Random.RandomService = TestBed.get(Random.RandomService);
    expect(service).toBeTruthy();
  });
});
