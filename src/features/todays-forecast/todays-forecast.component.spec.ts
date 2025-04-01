import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysForecastComponent } from './todays-forecast.component';

describe('TodaysForecastComponent', () => {
  let component: TodaysForecastComponent;
  let fixture: ComponentFixture<TodaysForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodaysForecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
