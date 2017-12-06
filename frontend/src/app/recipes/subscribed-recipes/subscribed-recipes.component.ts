import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-subscribed-recipes',
  templateUrl: 'subscribed-recipes.component.html',
  styleUrls: ['subscribed-recipes.component.scss'],
  providers: [RecipeService]
})
export class SubscribedRecipesComponent implements OnInit {

  loaded: boolean;

  private _recipes: Recipe[] = [];

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this._recipeService.followedRecipes.subscribe(recipes => {
      this._recipes = recipes;
      this.loaded = true;
    });
  }

  get recipes() {
    return this._recipes;
  }

}
