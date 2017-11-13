import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { AuthenticationService } from './user/shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private authService: AuthenticationService) { }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width >= 768;
  }

  userLoggedIn(): boolean {
    return this.authService.user$.getValue() !== null;
  }


  toggleNav() {
    this.sidenav.toggle();
  }
}
