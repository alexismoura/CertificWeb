import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule,
	],
	declarations: [
		HomeComponent
	],
	providers: []
})
export class HomeModule { }
