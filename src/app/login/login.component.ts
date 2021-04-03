import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthGuardService } from '../auth-guard.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	formGroup: any = FormGroup;
	field_required_message: string = 'This field is required';

	constructor(private formBuilder: FormBuilder, private router: Router, private authGuardService: AuthGuardService) {}

	createForm() {
		this.formGroup = this.formBuilder.group({
			username: [null, Validators.required],
			password: [null, [Validators.required, this.checkPassword]],
			validate: '',
		});
	}

	doLogin(event: any) {
		event.preventDefault();
		if (this.should_disable_login) {
			return;
		}
		this.authGuardService.login();
		this.router.navigate(['home']);
	}

	get should_disable_login() {
		return !this.username.valid || !this.password.valid;
	}

	get username() {
		return this.formGroup.get('username') as FormControl;
	}

	get password() {
		return this.formGroup.get('password') as FormControl;
	}

	checkPassword(control: any) {
		let enteredPassword = control.value;
		let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
		return !passwordCheck.test(enteredPassword) && enteredPassword ? { requirements: true } : null;
	}

	getErrorPassword() {
		return this.formGroup.get('password').hasError('required')
			? this.field_required_message
			: this.formGroup.get('password').hasError('requirements')
			? 'Password needs to be at least eight characters, one uppercase letter and one number'
			: '';
	}

	ngOnInit() {
		this.createForm();
	}
}
