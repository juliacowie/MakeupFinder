import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcealerComponent } from './concealer.component';

describe('ConcealerComponent', () => {
  let component: ConcealerComponent;
  let fixture: ComponentFixture<ConcealerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcealerComponent]
    });
    fixture = TestBed.createComponent(ConcealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
