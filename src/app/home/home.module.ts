import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from '../app-material/app-material.module';

const routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    RouterModule.forChild(routes),
    AppMaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
