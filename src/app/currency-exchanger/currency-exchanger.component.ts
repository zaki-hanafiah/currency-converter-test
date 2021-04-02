import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import dayjs from 'dayjs';

@Component({
	selector: 'app-currency-exchanger',
	templateUrl: './currency-exchanger.component.html',
	styleUrls: ['./currency-exchanger.component.scss'],
})
export class CurrencyExchangerComponent implements OnInit {
	currency_rates: Object = {};
	currency_selected: String | undefined;
	currency_fetched_time: String | undefined;
	rate_selected: Number | undefined;
	base_amount: Number | undefined;
	final_amount: Number | undefined;
	errors: Object = {};

	constructor(private apiService: ApiService) {}

	onSetCurrencyRate($event: { value: Number; text: String }) {
		this.rate_selected = $event.value;
		this.currency_selected = $event.text;
		this.calculateConversion();
	}

	onSetBaseAmount($event: any) {
		if (isNaN($event)) return;
		this.base_amount = $event || 0;
		this.calculateConversion();
	}

	calculateConversion() {
		if (!this.rate_selected || !this.base_amount) {
			return;
		}
		this.final_amount = Number((Number(this.base_amount) / Number(this.rate_selected)).toFixed(2));
	}

	ngOnInit() {
		// TODO: move to store, cache response until x amount of time elapsed to update cached response
		this.apiService.getCurrencyRatesForUSD().subscribe((data: any) => {
			this.currency_rates = data?.rates;
			this.currency_fetched_time = dayjs.unix(data?.updated).format('YYYY-MM-DD HH:mm:ss');
		});
	}
}
