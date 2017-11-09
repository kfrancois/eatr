import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      overview works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
