import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login.component';
import { VMessagesModule } from '../../component/vmessages/vmessages.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule,
		VMessagesModule,
		NgxMaskModule.forRoot(),
	],
	declarations: [
		LoginPageComponent
	],
	providers: []
})
export class LoginPageModule { }
