
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutes } from './welcome.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WelcomeRoutes),
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
