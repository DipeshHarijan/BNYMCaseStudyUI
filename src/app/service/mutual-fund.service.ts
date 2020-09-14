import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MutualFund } from '../model/mutual-fund';

@Injectable({
  providedIn: 'root'
})
export class MutualFundService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5000/mutualfund-service/';
  }

  getMutualFunds(): Observable<MutualFund[]> {
    return this.httpClient.get<MutualFund[]>(this.baseUrl + 'mutualfund/getall');
  }
}
