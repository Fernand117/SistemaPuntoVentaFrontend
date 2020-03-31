import { TestBed } from '@angular/core/testing';

import { ProvedoresServicesService } from './provedores-services.service';

describe('ProvedoresServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvedoresServicesService = TestBed.get(ProvedoresServicesService);
    expect(service).toBeTruthy();
  });
});
