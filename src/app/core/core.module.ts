import { NgModule } from '@angular/core';
import { PrivatePageComponent } from './private-page/private-page.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrivatePageComponent,
    PublicPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PrivatePageComponent,
    PublicPageComponent
  ]
})
export class CoreModule {
}
