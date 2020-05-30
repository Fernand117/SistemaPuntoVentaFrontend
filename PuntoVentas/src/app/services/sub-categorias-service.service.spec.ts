import { TestBed } from '@angular/core/testing';

import { SubCategoriasServiceService } from './sub-categorias-service.service';

describe('SubCategoriasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubCategoriasServiceService = TestBed.get(SubCategoriasServiceService);
    expect(service).toBeTruthy();
  });
});
