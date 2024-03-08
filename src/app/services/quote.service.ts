import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  qoute = new BehaviorSubject("Hello world");
  currentQuote = this.qoute.asObservable();


  updateQuote(newQuote: string){
    this.qoute.next(newQuote);
  }
}
