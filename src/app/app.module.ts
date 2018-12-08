import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { EstimatedBalanceComponent } from './estimated-balance/estimated-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    EstimatedBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
