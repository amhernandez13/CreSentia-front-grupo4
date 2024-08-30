import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Texto3Component } from './texto3.component';

describe('Texto3Component', () => {
  let component: Texto3Component;
  let fixture: ComponentFixture<Texto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Texto3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Texto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
