import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CounterComponent } from './counter.component';



@NgModule({
  imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule
	],
	declarations: [
		CounterComponent
	],
	providers: []
})
export class CounterModule { }
