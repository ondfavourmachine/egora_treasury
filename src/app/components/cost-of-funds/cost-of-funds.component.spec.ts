import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostOfFundsComponent } from './cost-of-funds.component';

describe('CostOfFundsComponent', () => {
  let component: CostOfFundsComponent;
  let fixture: ComponentFixture<CostOfFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostOfFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostOfFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
