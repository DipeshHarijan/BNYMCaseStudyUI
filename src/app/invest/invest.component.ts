import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../model/account';
import { Bank } from '../model/bank';
import { MutualFund } from '../model/mutual-fund';
import { Transaction } from '../model/transaction';
import { AccountService } from '../service/account.service';
import { MutualFundService } from '../service/mutual-fund.service';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  public mutualFunds: MutualFund[];
  mutualFund: MutualFund;
  mf: string;
  public accounts: Account[];
  account: Account;
  ac: number;
  amount: number;
  transaction: Transaction;
  banks: Bank[];

  constructor(private accountService: AccountService, private router: Router, private mutualFundService: MutualFundService) {
    this.mutualFund = new MutualFund(null,"");
    this.account = new Account(new Bank("","",null,""),"");
  }

  ngOnInit(): void {
    this.mutualFundService.getMutualFunds().subscribe(data => this.mutualFunds = data);
    this.accountService.getAccounts().subscribe(data => this.accounts = data);

  }

  save() {
    // this.mutualFund = this.mutualFunds.find(data => this.mf == data.mutualFundName);
    // console.log(this.mutualFund);
    // this.account = this.accounts.find(data => this.ac == data.accountNumber);
    // console.log(this.account);
    this.transaction = new Transaction(this.mutualFund.mutualFundId, this.amount, this.account);
    // console.log(this.transaction);
    this.accountService.invest(this.transaction).subscribe(data => { alert('Investment Successful') });
    this.router.navigate(['dashboard'])
  }

  change(){
    this.mutualFund = this.mutualFunds.find(data => this.mf == data.mutualFundName);
  }

  change2(){
    this.account = this.accounts.find(data => this.ac == data.accountNumber);
  }

}
