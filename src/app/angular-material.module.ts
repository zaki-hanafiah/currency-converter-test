import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

const materialModules = [
	CdkTreeModule,
	MatButtonModule,
	MatCardModule,
	MatInputModule,
	MatMenuModule,
	MatRippleModule,
	MatSelectModule,
	MatSnackBarModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatTreeModule,
	OverlayModule,
];

@NgModule({
	imports: [CommonModule, ...materialModules],
	exports: [...materialModules],
})
export class AngularMaterialModule {}
