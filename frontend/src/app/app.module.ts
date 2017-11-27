import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { AuthGuardService } from './user/shared/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModuleModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutFullComponent } from './layout/layout-full/layout-full.component';
import { LayoutMobileComponent } from './layout/layout-mobile/layout-mobile.component';
import { AuthenticationService } from './user/shared/authentication.service';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';
import { AutoLayoutComponent } from './layout/auto-layout/auto-layout.component';
import { LayoutLoginComponent } from './layout/layout-login/layout-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LayoutFullComponent,
    LayoutMobileComponent,
    AutoLayoutComponent,
    LayoutLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserModule,
    AppMaterialModule,
    AppRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
