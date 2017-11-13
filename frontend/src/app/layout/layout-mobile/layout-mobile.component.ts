import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../../user/shared/authentication.service';

@Component({
  selector: 'app-layout-mobile',
  templateUrl: 'layout-mobile.component.html',
  styleUrls: ['layout-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutMobileComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  userLoggedIn(): boolean {
    return this.authService.user$.getValue() !== null;
  }

}
