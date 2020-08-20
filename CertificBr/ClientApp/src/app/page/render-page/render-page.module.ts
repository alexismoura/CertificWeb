import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RenderPageComponent } from './render-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    RenderPageComponent
  ]
})
export class RenderPageModule { }
