import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

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
import {UserService} from '../services/user.service';
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
  { path: '',
    component: MainComponent,
    data: { title: 'Accueil' }
  },
  { path: 'cash',
    component: CashComponent,
    data: { title: 'Mes entrées' }
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
    MainComponent,
    UserListComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebase, 'budgetapp'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [Title, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
