import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-login',
  template: `
    <div class="splash-screen">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class LayoutLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
