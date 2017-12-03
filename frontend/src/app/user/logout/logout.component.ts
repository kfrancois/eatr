import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-logout',
  template: `
    <p>
      logout works!
    </p>
  `,
  styles: [],
})

export class LogoutComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
