import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-currency-exchanger',
	templateUrl: './currency-exchanger.component.html',
	styleUrls: ['./currency-exchanger.component.scss'],
})
export class CurrencyExchangerComponent implements OnInit {
	currency_rates: any = {};
	currency_selected: any | undefined;
	rate_selected: any | undefined;
	base_amount: any | undefined;
	final_amount: any | undefined;

	constructor(private apiService: ApiService) {}

	onSetCurrencyRate($event: { value: any; text: any }) {
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
		this.final_amount = (Number(this.base_amount) / Number(this.rate_selected)).toFixed(2);
	}

	ngOnInit() {
		this.apiService.getCurrencyRatesForUSD().subscribe((data) => {
			this.currency_rates = data;
		});
	}
}
