import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, OverlayModule],
			declarations: [AppComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			providers: [MatSnackBar],
		}).compileComponents();
	});

	test('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	test(`should have as title 'currency-converter-test'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('currency-converter-test');
	});
});
