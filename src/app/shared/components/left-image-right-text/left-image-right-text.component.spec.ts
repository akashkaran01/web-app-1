import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImageRightTextComponent } from './left-image-right-text.component';

describe('LeftImageRightTextComponent', () => {
  let component: LeftImageRightTextComponent;
  let fixture: ComponentFixture<LeftImageRightTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftImageRightTextComponent]
    });
    fixture = TestBed.createComponent(LeftImageRightTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
