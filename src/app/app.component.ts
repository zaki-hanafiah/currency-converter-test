import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: String = 'currency-converter-test';
	is_logged_in: Boolean = false;

	checkIsLoggedIn() {
		if (localStorage.getItem('login_token')) {
			this.is_logged_in = true;
		}
	}

	doLogOut() {
		localStorage.removeItem('login_token');
		this.is_logged_in = false;
	}
}
