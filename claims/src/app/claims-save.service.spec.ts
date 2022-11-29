import { TestBed } from '@angular/core/testing';

import { ClaimsSaveService } from './claims-save.service';

describe('ClaimsSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimsSaveService = TestBed.get(ClaimsSaveService);
    expect(service).toBeTruthy();
  });
});
