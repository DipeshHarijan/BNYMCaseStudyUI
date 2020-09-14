import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5000/account-service/';
  }

  getAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseUrl + 'account/get/' + sessionStorage.getItem('username'));
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(this.baseUrl + "account/add", account);
  }

  invest(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.baseUrl + "transaction/invest", transaction);
  }
}
