import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
	currencies_list: string[] = [];
	currenciesForm = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]);
	field_required_message: string = 'Please choose at least one currency';
	field_hint_message: string = 'You may choose up to 10 currencies';
	length_exceeded_message: string = 'Please select only 1 - 10 number of currencies';

	constructor(private apiService: ApiService, private snackBar: MatSnackBar) {}

	ngOnInit() {
		const saved_currencies_list = localStorage.getItem('currencies_selected');
		if (typeof saved_currencies_list === 'string') {
			const saved_list = JSON.parse(saved_currencies_list);
			this.currenciesForm.setValue(saved_list);
		}
		this.apiService.getCurrencyRatesForUSD().subscribe((data: any) => {
			if (data?.rates)
				Object.keys(data.rates).forEach((key) => {
					this.currencies_list.push(key);
				});
		});
	}

	get should_disable_save() {
		return !this.currenciesForm.valid;
	}

	saveSettings(event: any) {
		event.preventDefault();
		if (!this.currenciesForm.valid) {
			return;
		}
		localStorage.setItem('currencies_selected', JSON.stringify(this.currenciesForm.value));
		this.snackBar.open('Successfully saved settings!', 'Dismiss', {
			duration: 2500,
			horizontalPosition: 'right',
			verticalPosition: 'top',
		});
	}
}
