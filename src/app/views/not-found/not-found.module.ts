import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { NotFoundRoutes } from './not-found.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NotFoundRoutes),
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
