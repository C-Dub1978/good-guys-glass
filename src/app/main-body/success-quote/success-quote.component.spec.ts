import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessQuoteComponent } from './success-quote.component';

describe('SuccessQuoteComponent', () => {
  let component: SuccessQuoteComponent;
  let fixture: ComponentFixture<SuccessQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
