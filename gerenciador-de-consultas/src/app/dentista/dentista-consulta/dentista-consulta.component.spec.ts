import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistaConsultaComponent } from './dentista-consulta.component';

describe('DentistaConsultaComponent', () => {
  let component: DentistaConsultaComponent;
  let fixture: ComponentFixture<DentistaConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentistaConsultaComponent]
    });
    fixture = TestBed.createComponent(DentistaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
