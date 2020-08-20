import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportAfdComponent } from './import-afd-component';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
    RouterModule,
    BrowserAnimationsModule,
	],
	declarations: [
    ImportAfdComponent
	],
	providers: []
})
export class ImportAfdModule { }
