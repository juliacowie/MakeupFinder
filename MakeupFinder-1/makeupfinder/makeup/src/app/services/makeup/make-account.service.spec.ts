import { TestBed } from '@angular/core/testing';

import { MakeAccountService } from './make-account.service';

describe('MakeAccountService', () => {
  let service: MakeAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
