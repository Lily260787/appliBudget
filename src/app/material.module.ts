import { NgModule } from '@angular/core';
import {MatDatepickerModule, MatInputModule, MatRippleModule, MatNativeDateModule} from '@angular/material';
@NgModule({
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,
    MatNativeDateModule,
  ],
  exports: [
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,
    MatNativeDateModule,
  ]
})

export class MaterialModule {}
