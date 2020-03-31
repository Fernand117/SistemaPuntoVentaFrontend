import { TestBed } from '@angular/core/testing';

import { AlmacenServicesService } from './almacen-services.service';

describe('AlmacenServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlmacenServicesService = TestBed.get(AlmacenServicesService);
    expect(service).toBeTruthy();
  });
});
