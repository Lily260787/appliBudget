import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cash: Observable<any[]>;
  expenses: Observable<any[]>;
  balance: Observable<any[]>;
  estimated_balance: Observable<any[]>;
  public constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    ) {

    // this.expenses = db.collection('expenses').valueOf();
  }
  title = 'My $avings';

  titre: String;
  ngOnInit() {
    // Setting and getting titles into all pages
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
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
