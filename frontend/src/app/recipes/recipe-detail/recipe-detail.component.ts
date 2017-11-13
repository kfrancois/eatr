import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  template: `
    <p>
      recipe-detail works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
