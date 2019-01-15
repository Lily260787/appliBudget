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
  upCashForm: FormGroup;
  cashList: Cash[];
  options = [
    {name : 'Virement'},
    {name : 'Dépôt'},
    {name : 'Chèque'}
  ];
  // Form states
  success = false;
  editMode = false;
  readMode = false;
  docId = '';
  input = '';
  constructor(
    private cashService: CashService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // Getting list of cash
    this.cashService.getCash().subscribe(data => {
      this.cashList = data.map(e => {
        return {
          id: e.payload.doc.id,
          amount: e.payload.doc.get('amount'),
          status: e.payload.doc.get('status'),
          comment: e.payload.doc.get('comment'),
          date: e.payload.doc.get('date'),
          label: e.payload.doc.get('label'),
          modality: e.payload.doc.get('modality'),
        } as Cash;
      });
    });
    //Managing the form to create new entries
    this.upCashForm = this.fb.group(
      {
        amount_up: ['',
          [Validators.required]
        ],
        status_up : ['created',
          [Validators.required]
        ],
        label_up : [null,
          [Validators.required]
        ],
        comment_up : [null],
        date_up : [null,
          [Validators.required]
        ],
        modality_up : [null,
          [Validators.required]
        ],
        recurrence_up : ['false']
      }
    );

    this.cashForm = this.fb.group(
      {
        amount: ['',
          [Validators.required]
        ],
        status : ['created',
          [Validators.required]
        ],
        label : [null,
          [Validators.required]
        ],
        comment : [null],
        date : [null,
          [Validators.required]
        ],
        modality : [null,
          [Validators.required]
        ],
        recurrence : ['false']
      }
    );
  }
  // Submitting cashForm (add)
  async submitForm() {
    try {
      await this.cashService.createCash(this.cashForm.value);
      this.success = true;
      this.cashForm.reset();
    } catch (err) {
      console.error(err);
    }
  }
  // Submitting updateForm (up)
  async updateForm(id, property, target, oldValue) {
    this.closeEdition(); // Hide the input, just show the td
    try {
      const updatedItem = {};
      updatedItem[target] = this.upCashForm.value[property];// Getting the property to update
      if (updatedItem[target] == null || updatedItem[target] === '') {
        return;
      }
      await this.cashService.updateCash(id, updatedItem); // sending the property to be updated to the service
    } catch (err) {
      console.error(err);
    }
  }

  delete(id: string) {
    this.cashService.deleteCash(id);
  }

  showInput(docId, input) {
    console.log('docId vaut ' +docId);
    console.log('input vaut ' +input);
    this.editMode = true;
    this.readMode = false;
    this.docId = docId;
    this.input = input;
  }

  closeEdition() {
    this.readMode = true;
    this.editMode = false;
  }

}
