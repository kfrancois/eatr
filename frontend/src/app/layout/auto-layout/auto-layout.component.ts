import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auto-layout',
  templateUrl: 'auto-layout.component.html',
  styleUrls: ['auto-layout.component.scss']
})
export class AutoLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width >= 768;
  }

}
