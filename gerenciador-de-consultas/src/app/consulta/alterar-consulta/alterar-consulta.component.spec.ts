import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarConsultaComponent } from './alterar-consulta.component';

describe('AlterarConsultaComponent', () => {
  let component: AlterarConsultaComponent;
  let fixture: ComponentFixture<AlterarConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarConsultaComponent]
    });
    fixture = TestBed.createComponent(AlterarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
