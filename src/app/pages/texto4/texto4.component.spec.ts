import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Texto4Component } from './texto4.component';

describe('Texto4Component', () => {
  let component: Texto4Component;
  let fixture: ComponentFixture<Texto4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Texto4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Texto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
