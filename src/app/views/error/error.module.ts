import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';
import { ErrorRoutes } from './error.routing';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ErrorRoutes),
  ],
  declarations: [
   ErrorComponent
  ]
})
export class ErrorModule { }
