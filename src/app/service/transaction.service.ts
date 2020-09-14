import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:5000/account-service/transaction";
  }

  getAll(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.baseUrl + "/getInvestments/" + sessionStorage.getItem('username'));
  }
}
