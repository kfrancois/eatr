import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../../user/shared/authentication.service';

@Component({
  selector: 'app-layout-mobile',
  templateUrl: 'layout-mobile.component.html',
  styleUrls: ['layout-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutMobileComponent {

  username;

  constructor(private _authService: AuthenticationService) {
    this.username = this._authService.user$.value;
  }


  userLoggedIn(): boolean {
    return this._authService.user$.getValue() !== null;
  }

}
