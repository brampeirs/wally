
import { Routes } from '@angular/router';
import { PrivatePageRoutes } from './views/layouts/private-page/private-page.routes';
import { PublicPageRoutes } from './views/layouts/public-page/public-page.routes';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  PrivatePageRoutes,
  PublicPageRoutes,
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: 'error',
    redirectTo: '500',
    pathMatch: 'full'
  }
];


