import { TestBed, inject } from '@angular/core/testing';

import { FacturaService } from './factura.service';

describe('AutomovilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacturaService]
    });
  });

  it('should be created', inject([FacturaService], (service: FacturaService) => {
    expect(service).toBeTruthy();
  }));
});
