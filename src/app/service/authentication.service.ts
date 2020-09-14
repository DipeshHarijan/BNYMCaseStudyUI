import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  customer: Customer;
  baseUrl: string;
  customers: Customer[];

  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomers().subscribe(data => this.customers = data);
  }

  authenticate(username: string, password: string): boolean {
    this.customer = this.customers.find(data => data.pan == username);
    if (this.customer != null) {
      if (this.customer.password === password) {
        sessionStorage.setItem('username', username);
        return true;
      }
      else
        return false;

    }
    return false;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('username');
  }

}
