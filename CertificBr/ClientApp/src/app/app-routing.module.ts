import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

import { CounterComponent } from './page/counter/counter.component';
import { FetchDataComponent } from './page/fetch-data/fetch-data.component';
import { LoginPageComponent } from './page/login/login.component';
import { RenderPageComponent } from './page/render-page/render-page.component';
import { ImportAfdComponent } from './page/import-afd/import-afd-component';
import { LoginAuth } from './auth/login.auth';
import { LoggedAuth } from './auth/logged.auth';
//import { MainComponent } from './pages/main-page/main.component';
//import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
//import { RequestPageComponent } from './pages/request-page/request-page.component';
//import { RequestResolver } from './resolvers/request.resolver';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginAuth]
  },
  {
    path: 'counter',
    component: CounterComponent,
    canActivate: [LoginAuth]
  },
  {
    path: 'fetch-data',
    component: FetchDataComponent,
    canActivate: [LoginAuth]
  },
  {
    path: 'render-page',
    component: RenderPageComponent,
    canActivate: [LoginAuth]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoggedAuth]
  },
  {
    path: 'import-afd',
    component: ImportAfdComponent,
    //canActivate: [LoggedAuth]
  },
  /*
    {
        path: 'request',
        component: RequestPageComponent,
        canActivate: [LoginAuth],
        resolve: {
            requests: RequestResolver
        }
  },
  */
  {
    path: '**',
    component: HomeComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

