import { AuthenticationService } from './shared/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview/overview.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { RecipesModule } from '../recipes/recipes.module';
import { MasonryModule } from 'angular2-masonry/src/module';

const routes = [
  /*{ path: 'user', redirectTo: 'profile', pathMatch: 'full' },*/
  { path: 'profile', component: OverviewComponent },
  { path: 'profile/:user', component: OverviewComponent }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AppMaterialModule,
    MasonryModule
  ], providers: [
    AuthenticationService,
    AuthGuardService
  ],
  declarations: [OverviewComponent, LoginComponent, LogoutComponent, RegisterComponent]
})
export class UserModule { }
