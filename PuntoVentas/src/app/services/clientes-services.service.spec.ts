import { TestBed } from '@angular/core/testing';

import { ClientesServicesService } from './clientes-services.service';

describe('ClientesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientesServicesService = TestBed.get(ClientesServicesService);
    expect(service).toBeTruthy();
  });
});
