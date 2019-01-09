import { PublicPageComponent } from './public-page.component';

export const PublicPageRoutes = {
  path: '',
  component: PublicPageComponent,
  children: [
    {
      path: 'welcome',
      loadChildren: 'app/views/welcome/welcome.module#WelcomeModule'
    },
    {
     path: '404',
      loadChildren: 'app/views/not-found/not-found.module#NotFoundModule'
    },
    {
      path: '500',
      loadChildren: 'app/views/error/error.module#ErrorModule'
    }
  ]
};
