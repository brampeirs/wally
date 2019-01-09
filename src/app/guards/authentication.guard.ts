import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
/* import { AuthService } from '../services/authentication/auth.service'; */

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( /*private _auth: AuthService, */
              protected router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.isLoggedIn()) {
      this.router.navigate(['welcome']);
      return false;
    }
    return true;
  }

  /**
   * Check if user is logged in
   * @returns {boolean}
   */
  private isLoggedIn(): boolean {
    return true;
    // return this._auth.isAuthenticated();
  }
}
