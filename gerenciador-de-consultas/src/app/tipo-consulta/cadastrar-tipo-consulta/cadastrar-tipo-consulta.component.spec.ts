import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTipoConsultaComponent } from './cadastrar-tipo-consulta.component';

describe('CadastrarTipoConsultaComponent', () => {
  let component: CadastrarTipoConsultaComponent;
  let fixture: ComponentFixture<CadastrarTipoConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarTipoConsultaComponent]
    });
    fixture = TestBed.createComponent(CadastrarTipoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
