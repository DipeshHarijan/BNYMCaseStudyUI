import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  customer: Customer;
  baseUrl: string;

  constructor(private customerService: CustomerService) {
  }

  authenticate(username: string, password: string): boolean {
    this.customerService.getCustomer(username).subscribe(data => this.customer = data);
    if (this.customer != null) {
      if (this.customer.password === password) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
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
    sessionStorage.removeItem('password');
  }

}
