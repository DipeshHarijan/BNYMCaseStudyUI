import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5000/customer-service/';
  }

  getCustomer(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl + '/customer/get/' + id);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl + '/customer/add', customer);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl + 'customer/getall');
  }


} 