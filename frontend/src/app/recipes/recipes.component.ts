import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RecipeService } from './shared/recipe.service';
import { Recipe } from './shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.scss'],
  providers: [RecipeService],
  encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {

  loaded: boolean;

  private _recipes: Recipe[] = [];

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this._recipeService.recipes.subscribe(recipes => {
      setTimeout(() => {
        this._recipes = recipes;
        this.loaded = true;
      }, 1000);
    });
  }

  get recipes() {
    return this._recipes;
  }

}
