import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from './shared/recipe.service';
import { Recipe } from './shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {

  loaded: boolean;

  private _recipes: Recipe[] = [];

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this._recipeService.allRecipes.subscribe(recipes => {
      this._recipes = recipes;
      this.loaded = true;
    });
  }

  get recipes() {
    return this._recipes;
  }
}
