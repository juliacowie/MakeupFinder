import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BronzerComponent } from './bronzer.component';

describe('BronzerComponent', () => {
  let component: BronzerComponent;
  let fixture: ComponentFixture<BronzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BronzerComponent]
    });
    fixture = TestBed.createComponent(BronzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
