import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSidenavModule, MatCardModule,
  MatGridListModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatTooltipModule,
  MatDialogModule, MatStepperModule, MatProgressSpinnerModule, MatListModule
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
    MatListModule
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
    MatListModule
  ]
})

export class AppMaterialModule { }
