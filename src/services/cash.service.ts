import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CashService {
  constructor( private firestore: AngularFirestore) { }

  getCash() {
    return this.firestore.collection('cash').snapshotChanges();
  }

  createCash(cash: cash) {
    return this.firestore.collection('cash').add(cash);
  }

  updateCash(cash: cash) {
    delete data.id;
    this.firestore.doc('cash-list/' + cash.id).update(cash);
  }

  deleteCash(cash: cash) {
    this.firestore.doc('cash-list/' + cash.id).delete();
  }

}
