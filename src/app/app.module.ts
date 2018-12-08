import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { EstimatedBalanceComponent } from './estimated-balance/estimated-balance.component';
import { CashComponent } from './cash/cash.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenditureItemsComponent } from './expenditure-items/expenditure-items.component';
import { StatsComponent } from './stats/stats.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '',
    component: MainComponent,
    data: { title: 'Accueil' }
  },
  { path: 'cash',
    component: CashComponent,
    data: { title: 'My cash' }
    },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'expenditure_items', component: ExpenditureItemsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'bank_accounts', component: BankAccountsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    EstimatedBalanceComponent,
    CashComponent,
    ExpensesComponent,
    ExpenditureItemsComponent,
    StatsComponent,
    BankAccountsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
