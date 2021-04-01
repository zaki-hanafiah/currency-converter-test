import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputFieldComponent } from './input-field/input-field.component';
import { CurrencyExchangerComponent } from './currency-exchanger/currency-exchanger.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';

@NgModule({
	declarations: [AppComponent, InputFieldComponent, CurrencyExchangerComponent, SelectDropdownComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatSelectModule,
		HttpClientModule,
	],
	providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
	bootstrap: [AppComponent],
})
export class AppModule {}
