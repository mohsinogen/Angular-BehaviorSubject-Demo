import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UpdateQuoteComponent } from './components/update-quote/update-quote.component';
import { DisplayQuoteComponent } from './components/display-quote/display-quote.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UpdateQuoteComponent, DisplayQuoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'behaviorsubject-demo';
}
