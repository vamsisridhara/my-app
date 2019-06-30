import { Component, OnInit } from '@angular/core';
import { QuoteModel } from './../../viewmodels/quote';
import { QuoteService } from './../../api/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  public quoteList: QuoteModel[];
  public fetchedList: QuoteModel[];
  public quoteText: string = null;

  constructor(private service: QuoteService) { }

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    this.service.fetchQuotesFromServer().then((data: QuoteModel[]) => {
      this.fetchedList = data;
    });
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = null;
  }

  removeQuote(index) {
    this.service.removeQuote(index);
  }

}
