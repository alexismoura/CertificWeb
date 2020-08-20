import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FetchDataComponent } from './fetch-data.component';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule,
	],
	declarations: [
		FetchDataComponent
	],
	providers: []
})
export class FetchDataModule { }
