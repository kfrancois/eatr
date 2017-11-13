import { Recipe } from '../shared/recipe.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe',
  template: `
    <p>
      recipe works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
