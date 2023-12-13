import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmrTwoWayRadiosComponent } from './dmr-two-way-radios.component';

describe('DmrTwoWayRadiosComponent', () => {
  let component: DmrTwoWayRadiosComponent;
  let fixture: ComponentFixture<DmrTwoWayRadiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmrTwoWayRadiosComponent]
    });
    fixture = TestBed.createComponent(DmrTwoWayRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
