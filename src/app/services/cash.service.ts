import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cash } from '../models/Cash.model';

@Injectable({
  providedIn: 'root'
})
export class CashService {
  constructor( private firestore: AngularFirestore) { }

  getCash() {
    return this.firestore.collection('cash').snapshotChanges();
  }

  createCash(cash: Cash) {
    return this.firestore.collection('cash').add(cash);
  }

  updateCash(id, cash) {
    this.firestore.doc('cash/' + id).update(cash);
  }

  deleteCash(cashId: string) {
    this.firestore.doc('cash/' + cashId).delete();
  }

}
