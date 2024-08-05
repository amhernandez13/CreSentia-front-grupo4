import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutaRegistro2Component } from './terapeuta-registro-2.component';

describe('TerapeutaRegistro2Component', () => {
  let component: TerapeutaRegistro2Component;
  let fixture: ComponentFixture<TerapeutaRegistro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeutaRegistro2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeutaRegistro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
