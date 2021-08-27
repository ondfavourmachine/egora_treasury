import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturingObligationConcentrationRatioComponent } from './maturing-obligation-concentration-ratio.component';

describe('MaturingObligationConcentrationRatioComponent', () => {
  let component: MaturingObligationConcentrationRatioComponent;
  let fixture: ComponentFixture<MaturingObligationConcentrationRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaturingObligationConcentrationRatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturingObligationConcentrationRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
