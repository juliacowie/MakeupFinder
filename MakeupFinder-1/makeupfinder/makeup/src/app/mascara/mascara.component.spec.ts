import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascaraComponent } from './mascara.component';

describe('MascaraComponent', () => {
  let component: MascaraComponent;
  let fixture: ComponentFixture<MascaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascaraComponent]
    });
    fixture = TestBed.createComponent(MascaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
