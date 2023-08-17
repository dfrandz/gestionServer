import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewChartComponent } from './overview-chart.component';

describe('OverviewChartComponent', () => {
  let component: OverviewChartComponent;
  let fixture: ComponentFixture<OverviewChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewChartComponent]
    });
    fixture = TestBed.createComponent(OverviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
