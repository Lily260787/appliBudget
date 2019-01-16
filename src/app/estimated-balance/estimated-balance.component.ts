import { Component, OnInit } from '@angular/core';
import { CashService } from '../services/cash.service';
import { ExpenseService } from '../services/expense.service';
import { Cash } from '../models/Cash.model';
import { Expense } from '../models/Expense.model';

@Component({
  selector: 'app-estimated-balance',
  templateUrl: './estimated-balance.component.html',
  styleUrls: ['./estimated-balance.component.css']
})
export class EstimatedBalanceComponent implements OnInit {
  cashList: Cash[];
  expenseList: Expense[];

  constructor(private cashService: CashService,
              private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getBalance();
  }
  // get the total amount

  getTotalCash() {
    return this.cashService.getCash().subscribe(data => {
      this.cashList = data.map(e => {
        return {
          amount: e.payload.doc.get('amount'),
        } as Cash;
      });
    });
  }

  getTotalExpenses() {
    return this.expenseService.getExpenses().subscribe(data => {
      this.expenseList = data.map(e => {
        return {
          amount: e.payload.doc.get('amount'),
        } as Expense;
      });
    });
  }
  getBalance() {
    console.log("total cash vaut "+this.getTotalCash());
    console.log("total expense vaut "+this.getTotalExpenses());
  }

}
