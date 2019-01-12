
import { PrivatePageRoutes } from './core/private-page/private-page.routes';
import { PublicPageRoutes } from './core/public-page/public-page.routes';
import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  PrivatePageRoutes,
  PublicPageRoutes,
  {path: '**', redirectTo: '404', pathMatch: 'full'},
  {path: 'error', redirectTo: '500', pathMatch: 'full'}
];




