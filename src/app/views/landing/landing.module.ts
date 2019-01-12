
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LandingRoutes),
  ],
  exports: [
    LandingComponent
  ]

})
export class LandingModule { }
