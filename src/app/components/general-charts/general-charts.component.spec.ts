import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralChartsComponent } from './general-charts.component';

describe('GeneralChartsComponent', () => {
  let component: GeneralChartsComponent;
  let fixture: ComponentFixture<GeneralChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
