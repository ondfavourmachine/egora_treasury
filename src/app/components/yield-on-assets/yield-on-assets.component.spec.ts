import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldOnAssetsComponent } from './yield-on-assets.component';

describe('YieldOnAssetsComponent', () => {
  let component: YieldOnAssetsComponent;
  let fixture: ComponentFixture<YieldOnAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YieldOnAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldOnAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
