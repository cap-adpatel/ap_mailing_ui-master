import {TestBed} from '@angular/core/testing';

import {PtAdminService} from './pt-admin.service';

describe('PtAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PtAdminService = TestBed.get(PtAdminService);
    expect(service).toBeTruthy();
  });
});
