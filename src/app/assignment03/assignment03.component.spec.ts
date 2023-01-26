import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment03Component } from './assignment03.component';

describe('Assignment03Component', () => {
  let component: Assignment03Component;
  let fixture: ComponentFixture<Assignment03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
