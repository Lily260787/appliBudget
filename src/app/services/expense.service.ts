import { Injectable } from '@angular/core';
import { Expense } from '../models/Expense.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
}
