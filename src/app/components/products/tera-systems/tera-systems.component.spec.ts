import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeraSystemsComponent } from './tera-systems.component';

describe('TeraSystemsComponent', () => {
  let component: TeraSystemsComponent;
  let fixture: ComponentFixture<TeraSystemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeraSystemsComponent]
    });
    fixture = TestBed.createComponent(TeraSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
