import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutaRegistro5Component } from './terapeuta-registro-5.component';

describe('TerapeutaRegistro5Component', () => {
  let component: TerapeutaRegistro5Component;
  let fixture: ComponentFixture<TerapeutaRegistro5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeutaRegistro5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeutaRegistro5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
