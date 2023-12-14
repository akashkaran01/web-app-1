import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetraRadiosComponent } from './tetra-radios.component';

describe('TetraRadiosComponent', () => {
  let component: TetraRadiosComponent;
  let fixture: ComponentFixture<TetraRadiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TetraRadiosComponent]
    });
    fixture = TestBed.createComponent(TetraRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
