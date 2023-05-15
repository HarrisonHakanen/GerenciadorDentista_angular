import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDentistaComponent } from './cadastrar-dentista.component';

describe('CadastrarDentistaComponent', () => {
  let component: CadastrarDentistaComponent;
  let fixture: ComponentFixture<CadastrarDentistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarDentistaComponent]
    });
    fixture = TestBed.createComponent(CadastrarDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
