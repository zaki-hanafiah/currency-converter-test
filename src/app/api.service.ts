import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private httpClient: HttpClient) {}

	public getCurrencyRatesForUSD() {
		return this.httpClient.get(`https://currencyapi.net/api/v1/rates?key=${environment.currencyApiKey}&base=USD`);
	}
}
