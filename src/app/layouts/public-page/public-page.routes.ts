import { PublicPageComponent } from './public-page.component';

export const PublicPageRoutes = {
  path: '',
  component: PublicPageComponent,
  children: [
    {
      path: 'landing',
      loadChildren: 'app/views/landing/landing.module#LandingModule'
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
