import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];

  constructor(private transactionService: TransactionService) {
    
  }

  ngOnInit(): void {
    this.transactionService.getAll().subscribe(data => { this.transactions = data }, error => { console.log(error) });
  }

}
