import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderPageImageContainerComponent } from './sub-header-page-image-container.component';

describe('SubHeaderPageImageContainerComponent', () => {
  let component: SubHeaderPageImageContainerComponent;
  let fixture: ComponentFixture<SubHeaderPageImageContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubHeaderPageImageContainerComponent]
    });
    fixture = TestBed.createComponent(SubHeaderPageImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
