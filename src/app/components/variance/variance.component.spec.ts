import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarianceComponent } from './variance.component';

describe('VarianceComponent', () => {
  let component: VarianceComponent;
  let fixture: ComponentFixture<VarianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
