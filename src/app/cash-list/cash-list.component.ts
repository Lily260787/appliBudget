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
  // Form state
  success = false;
  editMode = false;
  readMode = false;
  docId = '';
  input = '';
  /*editMode_libelle = false;
  editMode_date = false;
  editMode_amount = false;
  editMode_type = false;
  editMode_comment = false;
  editMode_recurrence = false;*/

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
          comment: e.payload.doc.get('comment'),
        } as Cash;
      });
    });
    //Managing the form to create new entries
    this.upCashForm = this.fb.group(
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
  // Submitting form
  async submitForm() {
    try {
      await this.create(this.cashForm.value);
      this.success = true;
      this.cashForm.reset();
    } catch (err) {
      console.error(err);
    }
  }

  updateForm() {
    alert('updateForm called');
    return this.editMode = false;
   /*try {
      this.editMode = false;
      await this.update(this.cashForm.value);
    } catch (err) {
      console.error(err);
    }*/
  }

  create(cash: Cash) {
    this.cashService.createCash(cash);
  }

  update(cash: Cash) {
    //alert("update doc "+cash);
    //this.cashService.updateCash(cash);
  }

  delete(id: string) {
    this.cashService.deleteCash(id);
  }

  showInput(docId, input) {
    alert('showInput');
    this.editMode = true;
    this.docId = docId;
    this.input = input;
    console.log('editMode vaut '+this.editMode);
    console.log('readMode vaut '+this.readMode);
    this.readMode = false;
  }

  closeEdition() {
    this.readMode = true;
    this.editMode = false;
    console.log('editMode vaut '+this.editMode);
    console.log('readMode vaut '+this.readMode);
  }

}
