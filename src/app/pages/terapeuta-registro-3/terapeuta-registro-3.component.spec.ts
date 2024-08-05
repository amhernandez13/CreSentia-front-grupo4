import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutaRegistro3Component } from './terapeuta-registro-3.component';

describe('TerapeutaRegistro3Component', () => {
  let component: TerapeutaRegistro3Component;
  let fixture: ComponentFixture<TerapeutaRegistro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeutaRegistro3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeutaRegistro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
