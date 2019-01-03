import {Component, OnInit} from '@angular/core';
import { CashService } from '../services/cash.service';
import { Cash } from '../models/Cash.model';

@Component({
  selector: 'app-cash-list',
  templateUrl: './cash-list.component.html',
  styleUrls: ['./cash-list.component.css']
})
export class CashListComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {

  }

  /*create(cash: Cash) {
    this.cashService.create(cash);
  }

  update(cash: Cash) {
    this.cashService.update(cash);
  }

  delete(id: string) {
    this.firestore.doc('cash/' + id).delete();
  }*/

}
