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
});
