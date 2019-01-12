import { AuthGuard } from '../app/auth/auth-guard.service';
import { AuthService } from '../app/auth/auth.service';

export const environment = {
    production: true,
    envName: 'prod',
    origin: 'https://recipes-fcf10.firebaseio.com',

    ENV_PROVIDERS: [
        AuthGuard,
        AuthService
    ]
};

