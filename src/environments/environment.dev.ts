import { AuthGuard } from '../app/auth/auth-guard.service';
import { AuthService } from '../app/auth/auth.service';
import { AccountsService } from '../app/views/accounts/accounts.service';
import { DataStorageService } from '../app/shared/data-storage.service';

export const environment = {
  production: false,
  envName: 'dev',
  origin: 'https://recipes-fcf10.firebaseio.com',

  ENV_PROVIDERS: [
    AuthGuard,
    AuthService,
    DataStorageService,
    AccountsService
  ]
};

