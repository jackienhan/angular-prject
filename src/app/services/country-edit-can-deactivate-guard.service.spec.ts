import { TestBed } from '@angular/core/testing';

import { CountryEditCanDeactivateGuardService } from './country-edit-can-deactivate-guard.service';

describe('CountryEditCanDeactivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryEditCanDeactivateGuardService = TestBed.get(CountryEditCanDeactivateGuardService);
    expect(service).toBeTruthy();
  });
});
