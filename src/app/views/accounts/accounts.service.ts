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

  getAccountsWithIcon(): Promise<any> {
    const promisesToResolve = [];
    promisesToResolve.push(this.getBanks());
    promisesToResolve.push(this.getAccounts());
    return Promise.all(promisesToResolve).then((res) => {
      const banks = res[0];
      const accounts = res[1]
      for (let account of accounts) {
        account['icon'] = banks[account['bank']]['icon']
      }
      return accounts;
    });
  }

  getBanks(): Promise<any> {
    const token = this.authService.getToken();
    const endpoint = '/banks.json';
    return this.dataStorageService.getData(endpoint, {params: {auth: token}}).toPromise();
  }
}
