import { PrivatePageComponent } from './private-page.component';
 import { AuthGuard } from '../../auth/auth-guard.service';

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
