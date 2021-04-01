import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-inputfield',
	templateUrl: './input-field.component.html',
	styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
	inputFormControl = new FormControl('', [Validators.required]);
}
