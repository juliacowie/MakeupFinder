import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyelinerComponent } from './eyeliner.component';

describe('EyelinerComponent', () => {
  let component: EyelinerComponent;
  let fixture: ComponentFixture<EyelinerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyelinerComponent]
    });
    fixture = TestBed.createComponent(EyelinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
