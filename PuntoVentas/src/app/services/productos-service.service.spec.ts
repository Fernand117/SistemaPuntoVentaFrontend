import { TestBed } from '@angular/core/testing';

import { ProductosServiceService } from './productos-service.service';

describe('ProductosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosServiceService = TestBed.get(ProductosServiceService);
    expect(service).toBeTruthy();
  });
});
