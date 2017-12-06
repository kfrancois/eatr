import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSidenavModule, MatCardModule,
  MatGridListModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatTooltipModule,
  MatDialogModule, MatStepperModule, MatProgressSpinnerModule, MatListModule, MatSnackBarModule
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
    MatAutocompleteModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule
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
    MatAutocompleteModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule
  ]
})

export class AppMaterialModule { }
