import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutaRegistro1Component } from './terapeuta-registro-1.component';

describe('TerapeutaRegistro1Component', () => {
  let component: TerapeutaRegistro1Component;
  let fixture: ComponentFixture<TerapeutaRegistro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeutaRegistro1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeutaRegistro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
