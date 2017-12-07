import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <p>
      settings works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
