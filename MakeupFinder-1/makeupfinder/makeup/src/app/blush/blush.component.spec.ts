import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlushComponent } from './blush.component';

describe('BlushComponent', () => {
  let component: BlushComponent;
  let fixture: ComponentFixture<BlushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlushComponent]
    });
    fixture = TestBed.createComponent(BlushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
