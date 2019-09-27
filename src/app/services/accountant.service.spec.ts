import { TestBed } from '@angular/core/testing';

import { AccountantService } from './accountant.service';

describe('AccountantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountantService = TestBed.get(AccountantService);
    expect(service).toBeTruthy();
  });
});
