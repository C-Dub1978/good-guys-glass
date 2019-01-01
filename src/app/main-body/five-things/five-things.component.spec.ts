import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveThingsComponent } from './five-things.component';

describe('FiveThingsComponent', () => {
  let component: FiveThingsComponent;
  let fixture: ComponentFixture<FiveThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
