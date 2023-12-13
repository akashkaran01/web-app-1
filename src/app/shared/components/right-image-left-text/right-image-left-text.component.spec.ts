import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightImageLeftTextComponent } from './right-image-left-text.component';

describe('RightImageLeftTextComponent', () => {
  let component: RightImageLeftTextComponent;
  let fixture: ComponentFixture<RightImageLeftTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightImageLeftTextComponent]
    });
    fixture = TestBed.createComponent(RightImageLeftTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
