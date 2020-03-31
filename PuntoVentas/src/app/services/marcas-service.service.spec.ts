import { TestBed } from '@angular/core/testing';

import { MarcasServiceService } from './marcas-service.service';

describe('MarcasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcasServiceService = TestBed.get(MarcasServiceService);
    expect(service).toBeTruthy();
  });
});
