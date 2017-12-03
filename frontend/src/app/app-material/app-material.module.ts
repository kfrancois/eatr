import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatIconModule, MatButtonModule,
  MatMenuModule, MatSidenavModule, MatCardModule,
  MatGridListModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatTooltipModule, MatDialogModule, MatStepperModule, MatProgressSpinnerModule
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
    MatProgressSpinnerModule
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
    MatProgressSpinnerModule
  ]
})

export class AppMaterialModule { }
