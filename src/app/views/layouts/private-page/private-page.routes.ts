import { PrivatePageComponent } from './private-page.component';
 import { AuthGuard } from '../../../guards/authentication.guard';

export const PrivatePageRoutes = {
  path: '',
  component: PrivatePageComponent,
  children: [
    {
      path: 'recipes',
      canActivate: [ AuthGuard ],
      loadChildren: 'app/views/recipes/recipes.module#RecipesModule'
    }
  ]
};
