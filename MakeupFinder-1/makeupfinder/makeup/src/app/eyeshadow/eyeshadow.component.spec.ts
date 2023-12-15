import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeshadowComponent } from './eyeshadow.component';

describe('EyeshadowComponent', () => {
  let component: EyeshadowComponent;
  let fixture: ComponentFixture<EyeshadowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeshadowComponent]
    });
    fixture = TestBed.createComponent(EyeshadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
