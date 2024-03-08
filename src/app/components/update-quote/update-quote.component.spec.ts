import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuoteComponent } from './update-quote.component';

describe('UpdateQuoteComponent', () => {
  let component: UpdateQuoteComponent;
  let fixture: ComponentFixture<UpdateQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
