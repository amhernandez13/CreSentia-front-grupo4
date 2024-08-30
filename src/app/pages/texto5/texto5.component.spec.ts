import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Texto5Component } from './texto5.component';

describe('Texto5Component', () => {
  let component: Texto5Component;
  let fixture: ComponentFixture<Texto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Texto5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Texto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
