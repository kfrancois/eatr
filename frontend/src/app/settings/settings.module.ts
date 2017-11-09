import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';

const routes = [
  { path: '', component: SettingsComponent }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
