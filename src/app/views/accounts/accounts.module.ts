import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AccountsRoutes } from './accounts.routes';
import { AccountsComponent } from './accounts.component';

@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AccountsRoutes)
  ],
  exports: [
    AccountsComponent
  ]
})
export class AccountsModule {

}
