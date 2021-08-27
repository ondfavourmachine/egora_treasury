import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselImgsComponent } from './basel-imgs.component';

describe('BaselImgsComponent', () => {
  let component: BaselImgsComponent;
  let fixture: ComponentFixture<BaselImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaselImgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
