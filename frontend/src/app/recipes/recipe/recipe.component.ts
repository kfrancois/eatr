import { Recipe } from '../shared/recipe.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeComponent {

  @Input() recipe: Recipe;

  constructor() { }

}
