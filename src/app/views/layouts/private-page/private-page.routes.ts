import { PrivatePageComponent } from './private-page.component';
 import { AuthGuard } from '../../../guards/authentication.guard';

export const PrivatePageRoutes = {
  path: '',
  component: PrivatePageComponent,
  children: [
    {
      path: 'dashboard',
      canActivate: [ AuthGuard ],
      loadChildren: 'app/views/dashboard/dashboard.module#DashboardModule'
    }
  ]
};
