import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../model/account';
import { Bank } from '../model/bank';
import { AccountService } from '../service/account.service';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  account: Account;
  public banks: Bank[];
  bank: Bank;
  ifsc: string;

  constructor(private accountService: AccountService, private route: Router, private bankService: BankService) {
    bankService.getBanks().subscribe(data => this.banks = data);
    this.bank = new Bank("","",null,"");
  }

  ngOnInit(): void {
    

  }

  save() {
    // this.bank = this.banks.find(data => data.ifscCode == this.ifsc )
    // console.log(this.bank);
    this.account = new Account(this.bank, sessionStorage.getItem('username'));
    // console.log(this.account);
    this.accountService.createAccount(this.account).subscribe(data => alert('Account Created'));
    this.route.navigate(['dashboard']);
  }

  change(){
    // this.bankName = this.banks.find(data=> this.ifsc==data.ifscCode).bankName;
    this.bank = this.banks.find(data => data.ifscCode == this.ifsc );
  }

}
