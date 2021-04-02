import { Component } from '@angular/core';
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
		this.router.navigate(['home']);
	}
}
