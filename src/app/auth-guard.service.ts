import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class AuthGuardService {
	constructor(private snackBar: MatSnackBar) {}

	public login() {
		const random_id = [...Array(10)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
		localStorage.setItem('login_token', random_id);
		this.snackBar.open('You have successfully signed in!', 'Dismiss', {
			duration: 3500,
			horizontalPosition: 'right',
			verticalPosition: 'top',
		});
	}

	public isLoggedIn() {
		return localStorage.getItem('login_token') !== null;
	}

	public logout() {
		localStorage.removeItem('login_token');
		this.snackBar.open('You have successfully signed out', 'Dismiss', {
			duration: 3500,
			horizontalPosition: 'right',
			verticalPosition: 'top',
		});
	}
}
