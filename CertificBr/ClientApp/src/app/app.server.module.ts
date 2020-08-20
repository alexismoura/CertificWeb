import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

import { HomeComponent } from './page/home/home.component';
import { CounterComponent } from './page/counter/counter.component';
import { FetchDataComponent } from './page/fetch-data/fetch-data.component';

@NgModule({
    imports: [AppModule, ServerModule, ModuleMapLoaderModule],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
