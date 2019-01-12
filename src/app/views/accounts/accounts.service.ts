import { Injectable } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountsService {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {

  }

  getAccounts(): Promise<any> {
    const token = this.authService.getToken();
    const userId = this.authService.getUserId();
    const endpoint = `/accounts/${userId}.json`;
    return this.dataStorageService.getData(endpoint, {params: {auth: token}}).pipe(map(entry => {
     return Object.values(entry);
    })).toPromise();
  }
}
