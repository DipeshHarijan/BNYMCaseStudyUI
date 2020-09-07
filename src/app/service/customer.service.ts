import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string;
  user: string = sessionStorage.getItem('username');

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
  }

  getCustomer(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl + '/customer/get/' + id);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl + '/customer/add', customer);
  }

  getAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>('http://localhost:8081/account/get/'+ this.user);
  }

} 