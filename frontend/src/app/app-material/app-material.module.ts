import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ]
})

export class AppMaterialModule { }
