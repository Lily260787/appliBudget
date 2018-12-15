import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-balance',
  templateUrl:
    './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
@Input() current_balance: number;
@Input() id: number;
  constructor(private router: RouterModule,
               private route: ActivatedRoute) { }

  ngOnInit() {};
}
