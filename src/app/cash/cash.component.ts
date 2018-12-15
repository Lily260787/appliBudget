import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
