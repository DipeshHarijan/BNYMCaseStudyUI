import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer: Customer = new Customer();
  password2: string = "";
  passwordMatch = false;

  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit(): void {


  }

  save() {

    if (this.passwordMatching()) {
      this.customerService.addCustomer(this.customer).subscribe(data => { alert('Registration successful');this.route.navigate([""]); }, error => alert('Customer with given PAN already exists. Try again!'));
    } else {
      alert('password mismatch');
    }


  }

  passwordMatching(): boolean {
    this.passwordMatch = false;
    if (this.customer.password === this.password2) {
      this.passwordMatch = true;
    }
    return this.passwordMatch;
  }

}
