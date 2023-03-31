import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicos3Component } from './exemplo-servicos3.component';

describe('ExemploServicos3Component', () => {
  let component: ExemploServicos3Component;
  let fixture: ComponentFixture<ExemploServicos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploServicos3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServicos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
