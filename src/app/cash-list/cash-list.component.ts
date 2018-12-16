import {Component, OnInit} from '@angular/core';
import { CashService } from '../../services/cash.service';
import {Cash} from '../../models/Cash.model';

@Component({
  selector: 'app-cash',
  templateUrl: './cash-list.component.html',
  styleUrls: ['./cash-list.component.css']
})
export class CashListComponent implements OnInit {
  cash: Cash[];
  constructor(
private cashService: CashService
  ) { }

  ngOnInit() {
    this.cashService.getCash().subscribe(data => {
      this.cash = data.map(e => {
        return {
          id: e.payload.doc.id,
          amount: e.payload.doc.amount,
          label: e.payload.doc.label,
          date: e.payload.doc.date,
          comment: e.payload.doc.comment,
          type: e.payload.doc.type
        } as Cash;
      });
    });
  }

  create(cash: Cash) {
    this.cashService.createCash(cash);
  }

  update(cash: Cash) {
    this.cashService.updateCash(cash);
  }

  delete(id: string) {
    this.firestore.doc('cash/' + id).deleteCash();
  }

}
