import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { RouterModule } from '@angular/router';

/* Modules (Pages) */

import { LoginPageModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { CounterModule } from './counter/counter.module';
import { FetchDataModule } from './fetch-data/fetch-data.module';
import { RenderPageModule } from './render-page/render-page.module';
import { ImportAfdModule } from './import-afd/import-afd.module';
//import { DashboardPageModule } from './dashboard-page/dashboard-page.module';
//import { RequestPageModule } from './request-page/request-page.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HomeModule,
    CounterModule,
    FetchDataModule,
    LoginPageModule,
    RenderPageModule,
    ImportAfdModule
    //DashboardPageModule,
    //RequestPageModule
  ],
  exports: [],
  declarations: []
})
export class PageModule { }
