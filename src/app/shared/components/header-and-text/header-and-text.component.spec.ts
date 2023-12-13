import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAndTextComponent } from './header-and-text.component';

describe('HeaderAndTextComponent', () => {
  let component: HeaderAndTextComponent;
  let fixture: ComponentFixture<HeaderAndTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAndTextComponent]
    });
    fixture = TestBed.createComponent(HeaderAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
