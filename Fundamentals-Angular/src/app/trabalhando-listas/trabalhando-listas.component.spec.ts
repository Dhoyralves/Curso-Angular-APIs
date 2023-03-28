import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhandoListasComponent } from './trabalhando-listas.component';

describe('TrabalhandoListasComponent', () => {
  let component: TrabalhandoListasComponent;
  let fixture: ComponentFixture<TrabalhandoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalhandoListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabalhandoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
