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
  city: string;
  bankName: string;
  public banks2: Bank[];
  public banks3: Bank[];

  constructor(private accountService: AccountService, private route: Router, private bankService: BankService) {
    this.refreshBanks();
    this.bank = new Bank("","",null,"");
  }

  ngOnInit(): void {
    

  }

  refreshBanks(){
    this.bankService.getBanks().subscribe(data => this.banks = data);
  }

  save() {
    // this.bank = this.banks.find(data => data.ifscCode == this.ifsc )
    // console.log(this.bank);
    this.account = new Account(this.bank, sessionStorage.getItem('username'));
    // console.log(this.account);
    this.accountService.createAccount(this.account).subscribe(data => alert('Account Created'), error=> alert('Cannot create more than 4 accounts.'));
    this.route.navigate(['dashboard']);
  }

  changeIfsc(){
    // this.bankName = this.banks.find(data=> this.ifsc==data.ifscCode).bankName;
    this.bank = this.banks3.find(data => data.ifscCode == this.ifsc );
  }

  changeCity(){
    // this.refreshBanks();
    this.banks2 = this.banks.filter(data => data.city == this.city);
  }

  changeBank(){
    
    this.banks3 = this.banks2.filter(data => data.bankName == this.bankName);
  }

}
