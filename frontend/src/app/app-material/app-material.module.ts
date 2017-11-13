import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatButtonModule,
  MatMenuModule, MatSidenavModule, MatCardModule,
  MatGridListModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class AppMaterialModule { }
