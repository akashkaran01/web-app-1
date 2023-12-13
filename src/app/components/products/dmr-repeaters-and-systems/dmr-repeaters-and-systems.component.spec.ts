import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmrRepeatersAndSystemsComponent } from './dmr-repeaters-and-systems.component';

describe('DmrRepeatersAndSystemsComponent', () => {
  let component: DmrRepeatersAndSystemsComponent;
  let fixture: ComponentFixture<DmrRepeatersAndSystemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmrRepeatersAndSystemsComponent]
    });
    fixture = TestBed.createComponent(DmrRepeatersAndSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
