import { Injectable } from '@angular/core';
import { Bank } from '../model/bank';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5000/account-service/';
  }

  getBanks(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>(this.baseUrl + 'bank/getall');
  }
}
