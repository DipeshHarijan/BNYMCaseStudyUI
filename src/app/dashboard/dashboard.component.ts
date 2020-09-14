import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customer: Customer = new Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomer(sessionStorage.getItem('username')).subscribe(data => { this.customer = data });
  }

}
