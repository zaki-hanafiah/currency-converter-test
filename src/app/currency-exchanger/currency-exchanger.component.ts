import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-currency-exchanger',
	templateUrl: './currency-exchanger.component.html',
	styleUrls: ['./currency-exchanger.component.scss'],
})
export class CurrencyExchangerComponent implements OnInit {
	currency_rates: any = {};
	rate_selected: number | undefined = 1;
	base_amount: number | undefined = 0;
	final_amount: number | undefined;

	constructor(private apiService: ApiService) {}

	onSetCurrencyRate($event: any) {
		console.log('firing', $event);
		this.rate_selected = $event;
	}

	calculateConversion() {
		if (!this.rate_selected || !this.base_amount) {
			return;
		}
		this.final_amount = this.base_amount * this.rate_selected;
	}

	ngOnInit() {
		this.apiService.getCurrencyRatesForUSD().subscribe((data) => {
			this.currency_rates = data;
		});
	}
}
