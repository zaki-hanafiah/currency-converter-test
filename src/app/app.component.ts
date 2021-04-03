import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: String = 'currency-converter-test';
	is_logged_in: Boolean = this.authGuardService.isLoggedIn();

	constructor(public authGuardService: AuthGuardService, private router: Router) {}

	doLogOut() {
		this.authGuardService.logout();
		if (this.router.url !== 'home') {
			this.router.navigate(['home']);
		} else {
			this.router.routeReuseStrategy.shouldReuseRoute = function () {
				return false;
			};
		}
	}
}
