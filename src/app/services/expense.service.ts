import { Injectable } from '@angular/core';
import { Expense } from '../models/Expense.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private firestore: AngularFirestore) { }

  getExpenses() {
    return this.firestore.collection('expense').snapshotChanges();
  }

  createExpense(expense: Expense) {
    return this.firestore.collection('expense').add(Expense);
  }

  updateExpense(id, expenses) {
    this.firestore.doc('expense/' + id).update(expenses);
  }

  deleteExpense(expenseId: string) {
    this.firestore.doc('expense/' + expenseId).delete();
  }
}
