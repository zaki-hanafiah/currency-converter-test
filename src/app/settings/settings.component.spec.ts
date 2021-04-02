import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
	let component: SettingsComponent;
	let fixture: ComponentFixture<SettingsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SettingsComponent],
			imports: [HttpClientTestingModule, OverlayModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			providers: [ApiService, MatSnackBar],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SettingsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test('should exist', () => {
		expect(component).toBeDefined();
	});
});
