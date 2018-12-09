import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 cash: Observable<any[]>;
 expenses: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.cash = db.collection('cash').valueChanges();
    this.expenses = db.collection('expenses').valueChanges();
  }

  ngOnInit() {
  }

}
