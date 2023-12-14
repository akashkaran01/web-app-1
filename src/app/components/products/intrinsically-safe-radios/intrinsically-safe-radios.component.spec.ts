import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrinsicallySafeRadiosComponent } from './intrinsically-safe-radios.component';

describe('IntrinsicallySafeRadiosComponent', () => {
  let component: IntrinsicallySafeRadiosComponent;
  let fixture: ComponentFixture<IntrinsicallySafeRadiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntrinsicallySafeRadiosComponent]
    });
    fixture = TestBed.createComponent(IntrinsicallySafeRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
