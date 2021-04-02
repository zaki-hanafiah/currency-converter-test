import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.apiService.getCurrencyRatesForUSD().subscribe((data) => {
			console.log(data);
		});
	}
}
