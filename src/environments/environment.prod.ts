import { AuthGuard } from '../app/guards/authentication.guard';

export const environment = {
  production: true,
  envName: 'prod',
  ENV_PROVIDERS: [
    AuthGuard
  ]
};

