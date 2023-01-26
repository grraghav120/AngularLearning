import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdDayComponent } from './third-day.component';

describe('ThirdDayComponent', () => {
  let component: ThirdDayComponent;
  let fixture: ComponentFixture<ThirdDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
