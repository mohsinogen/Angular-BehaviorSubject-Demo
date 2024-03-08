import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuoteComponent } from './display-quote.component';

describe('DisplayQuoteComponent', () => {
  let component: DisplayQuoteComponent;
  let fixture: ComponentFixture<DisplayQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
