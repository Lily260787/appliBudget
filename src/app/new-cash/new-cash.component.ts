import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {Cash, User} from '../../models/Cash.model';
import {CashService} from '../../services/cash.service';

@Component({
  selector: 'app-new-cash',
  templateUrl: './new-cash.component.html',
  styleUrls: ['./new-cash.component.css']
})
export class NewCashComponent implements OnInit {
  cashForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private cashService: CashService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.cashForm = this.formBuilder.group({
      amount: '',
      comment: '',
      date: '',
      type: '',
      status: '',
      label: ''
    });
  }

  onSubmitForm() {
    const formValue = this.cashForm.value;
    const newCash = new Cash(
      formValue['amount'],
      formValue['comment'],
      formValue['date'],
      formValue['type'],
      formValue['status'],
      formValue['label']
    );
    this.cashService.addCash(newCash);
    this.router.navigate(['/cash-list']);
  }
}
