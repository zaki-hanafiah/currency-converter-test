import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDropdownComponent } from './select-dropdown.component';

describe('SelectDropdownComponent', () => {
	let component: SelectDropdownComponent;
	let fixture: ComponentFixture<SelectDropdownComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SelectDropdownComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectDropdownComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test('should exist', () => {
		expect(component).toBeDefined();
	});
});
