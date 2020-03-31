import { TestBed } from '@angular/core/testing';

import { RemisionesServicesService } from './remisiones-services.service';

describe('RemisionesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemisionesServicesService = TestBed.get(RemisionesServicesService);
    expect(service).toBeTruthy();
  });
});
