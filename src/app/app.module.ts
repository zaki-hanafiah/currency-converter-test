import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputFieldComponent } from './input-field/input-field.component';
import { CurrencyExchangerComponent } from './currency-exchanger/currency-exchanger.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
	declarations: [
		AppComponent,
		InputFieldComponent,
		CurrencyExchangerComponent,
		SelectDropdownComponent,
		HomeComponent,
		SettingsComponent,
		LoginComponent,
	],
	imports: [
		AngularMaterialModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		StoreModule.forRoot({}, {}),
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
