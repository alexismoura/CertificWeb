import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { UserIdleModule } from 'angular-user-idle';

import { ModalModule } from './component/modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './page/nav-menu/nav-menu.component';
import { PageModule } from './page/page.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        PageModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        ModalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
