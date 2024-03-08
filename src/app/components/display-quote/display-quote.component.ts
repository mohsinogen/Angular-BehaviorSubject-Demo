import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-display-quote',
  standalone: true,
  imports: [],
  templateUrl: './display-quote.component.html',
  styleUrl: './display-quote.component.css'
})
export class DisplayQuoteComponent {

  constructor(private quoteService: QuoteService){}
  
  currentQuote: string = '';

  ngOnInit(): void {
    this.quoteService.currentQuote.subscribe(quote => this.currentQuote = quote);
  }

}
