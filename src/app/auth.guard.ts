import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private authGuardService: AuthGuardService, private snackBar: MatSnackBar) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		if (!this.authGuardService.isLoggedIn()) {
			this.router.navigate(['login']);
			this.showWarningMessage();
		}
		return this.authGuardService.isLoggedIn();
	}

	showWarningMessage() {
		this.snackBar.open('The page you attempted to access is for authorized users only', 'Dismiss', {
			duration: 3500,
			horizontalPosition: 'right',
			verticalPosition: 'top',
		});
	}
}
