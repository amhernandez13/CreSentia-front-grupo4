import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutaRegistro4Component } from './terapeuta-registro-4.component';

describe('TerapeutaRegistro4Component', () => {
  let component: TerapeutaRegistro4Component;
  let fixture: ComponentFixture<TerapeutaRegistro4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeutaRegistro4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeutaRegistro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
