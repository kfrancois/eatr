import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatButtonModule,
  MatMenuModule, MatSidenavModule, MatCardModule,
  MatGridListModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule
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
    MatInputModule,
    MatAutocompleteModule
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
    MatInputModule,
    MatAutocompleteModule
  ]
})

export class AppMaterialModule { }
