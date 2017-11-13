import { AuthGuardService } from '../user/shared/auth-guard.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../user/login/login.component';
import { LogoutComponent } from '../user/logout/logout.component';
import { RegisterComponent } from '../user/register/register.component';

export const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },

  { path: 'home', canActivate: [AuthGuardService], loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'recipes', canActivate: [AuthGuardService], loadChildren: 'app/recipes/recipes.module#RecipesModule' },
  { path: 'user', canActivate: [AuthGuardService], loadChildren: 'app/user/user.module#UserModule' },
  { path: 'settings', canActivate: [AuthGuardService], loadChildren: 'app/settings/settings.module#SettingsModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModuleModule { }
