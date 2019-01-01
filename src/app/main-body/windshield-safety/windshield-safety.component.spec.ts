import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindshieldSafetyComponent } from './windshield-safety.component';

describe('WindshieldSafetyComponent', () => {
  let component: WindshieldSafetyComponent;
  let fixture: ComponentFixture<WindshieldSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindshieldSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindshieldSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
