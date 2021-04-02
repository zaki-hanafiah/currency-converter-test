import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthGuardService {
	constructor() {}

	public login() {
		const random_id = [...Array(10)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
		localStorage.setItem('login_token', random_id);
	}

	public isLoggedIn() {
		return localStorage.getItem('login_token') !== null;
	}

	public logout() {
		localStorage.removeItem('login_token');
	}
}
