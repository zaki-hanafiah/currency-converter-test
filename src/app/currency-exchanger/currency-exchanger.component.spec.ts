import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from '../api.service';

import { CurrencyExchangerComponent } from './currency-exchanger.component';

describe('CurrencyExchangerComponent', () => {
	let component: CurrencyExchangerComponent;
	let fixture: ComponentFixture<CurrencyExchangerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CurrencyExchangerComponent],
			imports: [HttpClientTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			providers: [ApiService],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CurrencyExchangerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test('should exist', () => {
		expect(component).toBeDefined();
	});

	test('selected currency rate should be 0.003 and text should be set to BTC', () => {
		component.onSetCurrencyRate({ value: 0.003, text: 'BTC' });
		expect(component.rate_selected).toBe(0.003);
		expect(component.currency_selected).toBe('BTC');
	});

	test('amount entered should be 10', () => {
		component.onSetBaseAmount(10);
		expect(component.base_amount).toBe(10);
	});

	test('final amount should be 50 for base amount of 10 and conversation rate of 0.2', () => {
		component.onSetBaseAmount(10);
		component.onSetCurrencyRate({ value: 0.2, text: 'XYZ' });
		component.calculateConversion();
		expect(component.final_amount).toBe(50);
	});

	test('should display error message if base amount is not a valid number', () => {
		component.onSetBaseAmount('asasd11');
		expect(component.amount_error_message).toBeDefined();
	});

	test('should display error message if base amount is a negative number', () => {
		component.onSetBaseAmount(-1);
		expect(component.amount_error_message).toBeDefined();
	});

	test('should display error message if currency is not selected', () => {
		component.is_dirty = true;
		component.onSetBaseAmount('10');
		expect(component.rate_error_message).toBeDefined();
	});
});
