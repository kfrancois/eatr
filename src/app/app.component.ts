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

  constructor() { }

  toggleNav() {
    this.sidenav.toggle();
  }
}
