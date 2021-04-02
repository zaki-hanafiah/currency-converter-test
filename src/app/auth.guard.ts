import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private authGuardService: AuthGuardService) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		if (!this.authGuardService.isLoggedIn()) {
			alert('You are not allowed to view this page');
			this.router.navigate(['login']);
			//redirect to login/home page etc
			//return false to cancel the navigation
		}
		return this.authGuardService.isLoggedIn();
	}
}
