import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-select-dropdown',
	templateUrl: './select-dropdown.component.html',
	styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent {
	@Input() options: any;
	@Output() onSelectChange = new EventEmitter();

	selected: number | string = '';

	handleChange(event: any) {
		this.onSelectChange.emit({
			value: event.value,
			text: event.source.triggerValue,
		});
	}
}
