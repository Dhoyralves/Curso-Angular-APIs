import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploSercicos1Component } from './exemplo-sercicos1.component';

describe('ExemploSercicos1Component', () => {
  let component: ExemploSercicos1Component;
  let fixture: ComponentFixture<ExemploSercicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploSercicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploSercicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
