import { TestBed } from '@angular/core/testing';

import { NxtUserService } from './nxt-user.service';

describe('NxtUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NxtUserService = TestBed.get(NxtUserService);
    expect(service).toBeTruthy();
  });
});
