import {TestBed} from '@angular/core/testing';

import {InsilicoService} from './insilico.service';

describe('InsilicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsilicoService = TestBed.get(InsilicoService);
    expect(service).toBeTruthy();
  });
});
