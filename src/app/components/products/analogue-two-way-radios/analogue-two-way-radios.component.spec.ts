import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogueTwoWayRadiosComponent } from './analogue-two-way-radios.component';

describe('AnalogueTwoWayRadiosComponent', () => {
  let component: AnalogueTwoWayRadiosComponent;
  let fixture: ComponentFixture<AnalogueTwoWayRadiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalogueTwoWayRadiosComponent]
    });
    fixture = TestBed.createComponent(AnalogueTwoWayRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
