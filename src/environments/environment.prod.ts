import { AuthGuard } from '../app/guards/authentication.guard';
import { RecipesService } from '../app/views/recipes/recipes.service';

export const environment = {
  production: true,
  envName: 'prod',
  ENV_PROVIDERS: [
    AuthGuard,
    RecipesService
  ]
};

