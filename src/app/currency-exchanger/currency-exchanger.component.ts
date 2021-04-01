import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss'],
})
export class CurrencyExchangerComponent implements OnInit {
  currency_rates: any = {};
  rate_selected: any | undefined;

  constructor(private apiService: ApiService) {}

  onSetCurrencyRate($event: any) {
    console.log('firing', $event);
    this.rate_selected = $event;
  }

  ngOnInit() {
    this.apiService.getCurrencyRatesForUSD().subscribe((data) => {
      this.currency_rates = data;
    });
  }
}
