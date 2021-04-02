import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-input-field',
	templateUrl: './input-field.component.html',
	styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
	@Output() onValueChange = new EventEmitter();

	inputFormControl = new FormControl('', [Validators.required]);

	handleChange($event: any) {
		this.onValueChange.emit($event?.target?.value);
	}
}
