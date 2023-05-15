import { TestBed } from '@angular/core/testing';

import { TipoConsultaService } from './tipo-consulta.service';

describe('TipoConsultaService', () => {
  let service: TipoConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
