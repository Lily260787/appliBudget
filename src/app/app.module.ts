import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

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
  { path: 'expenses', component: ExpensesComponent, data: { title: 'Mes sorties' } },
  { path: 'expenditure_items', component: ExpenditureItemsComponent, data: { title: 'Mes postes' }  },
  { path: 'stats', component: StatsComponent, data: { title: 'Statistiques' }  },
  { path: 'bank_accounts', component: BankAccountsComponent, data: { title: 'Mes comptes' }  },
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
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
