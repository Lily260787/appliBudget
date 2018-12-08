import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl:
    './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
@Input() current_balance: number;
@Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
