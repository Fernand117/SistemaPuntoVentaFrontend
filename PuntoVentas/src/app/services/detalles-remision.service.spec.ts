import { TestBed } from '@angular/core/testing';

import { DetallesRemisionService } from './detalles-remision.service';

describe('DetallesRemisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetallesRemisionService = TestBed.get(DetallesRemisionService);
    expect(service).toBeTruthy();
  });
});
