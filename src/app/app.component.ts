import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { CashService } from './services/cash.service';
import { Cash } from './models/Cash.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cashList: Cash[];
  cash: Observable<any[]>;
  expenses: Observable<any[]>;
  users: Observable<any[]>;
  balance: Observable<any[]>;
  estimated_balance: Observable<any[]>;
  public constructor(
    private cashService: CashService,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    db: AngularFirestore
    ) {
    this.users = db.collection('users').valueChanges();
  }
  title = 'My $avings';

  titre: String;
  ngOnInit() {
    this.cashService.getCash().subscribe(data => {
      this.cashList = data.map(e => {
        return {
          id: e.payload.doc.id,
          amount: e.payload.doc.get('amount'),
          status: e.payload.doc.get('status'),
          comment: e.payload.doc.get('comment'),
          date: e.payload.doc.get('date'),
          label: e.payload.doc.get('label'),
          type: e.payload.doc.get('type'),
        } as Cash;
      });
    });
    // Setting and getting titles into all pages
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) { route = route.firstChild };
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);
        this.titre = event['title'];
      });
  }

  public getCurrentTitlePage() {
    return this.titre;
  }
}
