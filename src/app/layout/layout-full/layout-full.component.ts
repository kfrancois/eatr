import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../../user/shared/authentication.service';

@Component({
  selector: 'app-layout-full',
  templateUrl: 'layout-full.component.html',
  styleUrls: ['layout-full.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutFullComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  userLoggedIn(): boolean {
    return this.authService.user$.getValue() !== null;
  }

}
