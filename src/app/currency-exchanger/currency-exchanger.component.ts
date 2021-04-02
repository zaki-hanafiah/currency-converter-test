import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import dayjs from 'dayjs';

@Component({
	selector: 'app-currency-exchanger',
	templateUrl: './currency-exchanger.component.html',
	styleUrls: ['./currency-exchanger.component.scss'],
})
export class CurrencyExchangerComponent implements OnInit {
	currency_rates: object = {};
	currency_selected: string | undefined;
	currency_fetched_time: string | undefined;
	rate_selected: number | undefined;
	base_amount: number | undefined;
	final_amount: number | undefined;
	// TODO: Use form group validation instead of manual validation
	amount_error_message: string | undefined;
	rate_error_message: string | undefined;
	is_dirty: boolean = false;

	constructor(private apiService: ApiService) {}

	onSetCurrencyRate($event: { value: number; text: string }) {
		this.rate_selected = $event.value;
		this.currency_selected = $event.text;
		if (this.rate_error_message) {
			this.rate_error_message = undefined;
		}
		this.calculateConversion();
	}

	onSetBaseAmount($event: any) {
		if (isNaN($event)) {
			this.amount_error_message = 'Please key in a valid amount';
			return;
		}
		this.amount_error_message = undefined;

		if ($event.length < 1 || Number($event) === 0) {
			this.amount_error_message = 'Amount is required';
		} else {
			this.amount_error_message = undefined;
		}
		if (!this.rate_selected && this.is_dirty) {
			this.rate_error_message = 'Please select a currency';
		} else {
			this.rate_error_message = undefined;
		}
		this.base_amount = $event;
		this.calculateConversion();
	}

	calculateConversion() {
		if (!this.rate_selected || !this.base_amount) {
			return;
		}
		this.is_dirty = true;
		this.final_amount = Number((Number(this.base_amount) / Number(this.rate_selected)).toFixed(2));
	}

	ngOnInit() {
		const saved_currencies_list = localStorage.getItem('currencies_selected');
		// TODO: move to store, cache response until x amount of time elapsed to update cached response
		this.apiService.getCurrencyRatesForUSD().subscribe((data: any) => {
			this.currency_rates = data?.rates;
			if (saved_currencies_list && typeof saved_currencies_list === 'string') {
				const selected_rates = JSON.parse(saved_currencies_list);

				const filtered_currencies = Object.keys(data?.rates)
					.filter((key) => selected_rates.includes(key))
					.reduce((obj, key) => {
						return {
							...obj,
							[key]: data?.rates[key],
						};
					}, {});
				this.currency_rates = filtered_currencies;
			}
			this.currency_fetched_time = dayjs.unix(data?.updated).format('YYYY-MM-DD HH:mm:ss');
		});
	}
}
