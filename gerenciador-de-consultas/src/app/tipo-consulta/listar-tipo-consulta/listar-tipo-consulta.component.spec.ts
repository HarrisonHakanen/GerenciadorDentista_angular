import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoConsultaComponent } from './listar-tipo-consulta.component';

describe('ListarTipoConsultaComponent', () => {
  let component: ListarTipoConsultaComponent;
  let fixture: ComponentFixture<ListarTipoConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTipoConsultaComponent]
    });
    fixture = TestBed.createComponent(ListarTipoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
