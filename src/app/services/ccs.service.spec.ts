import {TestBed} from '@angular/core/testing';

import {CcsService} from './ccs.service';

describe('CcsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CcsService = TestBed.get(CcsService);
    expect(service).toBeTruthy();
  });
});
