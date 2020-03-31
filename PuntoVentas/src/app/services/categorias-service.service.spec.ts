import { TestBed } from '@angular/core/testing';

import { CategoriasServiceService } from './categorias-service.service';

describe('CategoriasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriasServiceService = TestBed.get(CategoriasServiceService);
    expect(service).toBeTruthy();
  });
});
