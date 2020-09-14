import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  public accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data => { this.accounts = data });
  }
}