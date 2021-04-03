import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routeTransitionAnimations],
})
export class AppComponent {
	title: String = 'currency-converter-test';
	is_logged_in: Boolean = this.authGuardService.isLoggedIn();

	constructor(public authGuardService: AuthGuardService, private router: Router) {}

	doLogOut() {
		this.authGuardService.logout();
		if (this.router.url !== '/home') {
			this.router.navigate(['home']);
		} else {
			// TODO: Find a way to re-initialize same route without browser refresh
			window.location.reload();
		}
	}

	prepareRoute(outlet: RouterOutlet): boolean {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
	}
}
