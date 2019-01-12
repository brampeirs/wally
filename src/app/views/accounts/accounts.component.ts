import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  public accounts = [];
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts().then((res) => {
      this.accounts = res;
    })
  }

}
