import {Component, OnInit} from '@angular/core';
import { CashService } from '../services/cash.service';
import { Cash } from '../models/Cash.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cash-list',
  templateUrl: './cash-list.component.html',
  styleUrls: ['./cash-list.component.css']
})
export class CashListComponent implements OnInit {
  cashForm: FormGroup;
  options = [
    {name : 'Virement'},
    {name : 'Dépôt'},
    {name : 'Chèque'}
  ];
  // Form state
  loading = false;
  success = false;
  constructor(
    private cashService: CashService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.cashForm = this.fb.group(
      {
        amount: ['', [Validators.required]],
        status : ['created', [Validators.required]],
        label : ['', [Validators.required]],
        comment : [],
        date : ['', [Validators.required]],
        modality : ['', [Validators.required]],
        recurrence : ['false', []]
      }
    );
  }
  async submitForm() {
    this.loading = true;
    console.log(this.cashForm.value);
    try {
      await this.create(this.cashForm.value);
      this.success = true;
    } catch (err) {
      console.error(err);
    }
    this.loading = false;
  }

  create(cash: Cash) {
    this.cashService.createCash(cash);
  }

  update(cash: Cash) {
    this.cashService.update(cash);
  }

  delete(id: string) {
    this.firestore.doc('cash/' + id).delete();
  }

}
