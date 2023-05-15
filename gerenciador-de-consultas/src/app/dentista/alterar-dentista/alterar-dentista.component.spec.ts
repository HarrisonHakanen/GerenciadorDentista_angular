import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarDentistaComponent } from './alterar-dentista.component';

describe('AlterarDentistaComponent', () => {
  let component: AlterarDentistaComponent;
  let fixture: ComponentFixture<AlterarDentistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarDentistaComponent]
    });
    fixture = TestBed.createComponent(AlterarDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
