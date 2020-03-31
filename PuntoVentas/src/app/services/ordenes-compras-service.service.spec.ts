import { TestBed } from '@angular/core/testing';

import { OrdenesComprasServiceService } from './ordenes-compras-service.service';

describe('OrdenesComprasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenesComprasServiceService = TestBed.get(OrdenesComprasServiceService);
    expect(service).toBeTruthy();
  });
});
