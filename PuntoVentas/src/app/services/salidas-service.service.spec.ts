import { TestBed } from '@angular/core/testing';

import { SalidasServiceService } from './salidas-service.service';

describe('SalidasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalidasServiceService = TestBed.get(SalidasServiceService);
    expect(service).toBeTruthy();
  });
});
