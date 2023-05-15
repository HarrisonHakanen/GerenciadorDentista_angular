import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteConsultaComponent } from './paciente-consulta.component';

describe('PacienteConsultaComponent', () => {
  let component: PacienteConsultaComponent;
  let fixture: ComponentFixture<PacienteConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteConsultaComponent]
    });
    fixture = TestBed.createComponent(PacienteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
