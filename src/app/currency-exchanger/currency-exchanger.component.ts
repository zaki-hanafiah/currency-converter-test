import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss'],
})
export class CurrencyExchangerComponent implements OnInit {
  currency_rates: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCurrencyRatesForUSD().subscribe((data) => {
      this.currency_rates = data;
    });
  }
}
