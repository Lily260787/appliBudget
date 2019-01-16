import {Component, OnInit} from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Expense } from '../models/Expense.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cash} from '../models/Cash.model';
import {CashService} from '../services/cash.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expenseForm: FormGroup;
  upExpenseForm: FormGroup;
  expenseList: Expense[];
  options = [
    {name : 'Virement'},
    {name : 'Carte bancaire'},
    {name : 'Retrait'},
    {name : 'Chèque'},
    {name : 'Prélèvement'}
  ];

  success = false;
  editMode = false;
  readMode = false;
  docId = '';
  input = '';

  constructor(
    private expenseService: ExpenseService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(data => {
      this.expenseList = data.map(e => {
        return {
          id: e.payload.doc.id,
          amount: e.payload.doc.get('amount'),
          status: e.payload.doc.get('status'),
          comment: e.payload.doc.get('comment'),
          date: e.payload.doc.get('date'),
          label: e.payload.doc.get('label'),
          modality: e.payload.doc.get('modality'),
          recurrence: e.payload.doc.get('recurrence'),
        } as Expense;
      });
    });

    this.upExpenseForm = this.fb.group(
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

    this.expenseForm = this.fb.group(
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
      await this.expenseService.createExpense(this.expenseForm.value);
      this.expenseForm.reset();
      this.success = true;
    } catch (err) {
      console.error(err);
    }
  }
  // Submitting updateForm (up)
  async updateForm(id, property, target) {
    this.closeEdition(); // Hide the input, just show the td
    try {
      const updatedItem = {};
      updatedItem[target] = this.upExpenseForm.value[property];// Getting the property to update
      if (updatedItem[target] == null || updatedItem[target] === '') {
        return;
      }
      await this.expenseService.updateExpense(id, updatedItem); // sending the property to be updated to the service
    } catch (err) {
      console.error(err);
    }
  }

  delete(id: string) {
    this.expenseService.deleteExpense(id);
  }

  showInput(docId, input) {
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
