import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-update-quote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-quote.component.html',
  styleUrl: './update-quote.component.css'
})
export class UpdateQuoteComponent {

  constructor(private quoteService: QuoteService){}

  quote = '';

  
  submitHandler(){    
   this.quoteService.updateQuote(this.quote);
    this.quote="";
  }

}
