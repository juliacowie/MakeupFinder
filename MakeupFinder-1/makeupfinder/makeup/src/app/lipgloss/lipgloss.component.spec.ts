import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipglossComponent } from './lipgloss.component';

describe('LipglossComponent', () => {
  let component: LipglossComponent;
  let fixture: ComponentFixture<LipglossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LipglossComponent]
    });
    fixture = TestBed.createComponent(LipglossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
