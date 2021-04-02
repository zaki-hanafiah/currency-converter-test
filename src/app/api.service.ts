import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private httpClient: HttpClient) {}
	// TODO: Move API_KEY to env
	API_KEY = 'QIkKCRzVe3kHFWgHTU6kMvyFA5CvIGtBXurz';

	public getCurrencyRatesForUSD() {
		return this.httpClient.get(`https://currencyapi.net/api/v1/rates?key=${this.API_KEY}&base=USD`);
	}
}
