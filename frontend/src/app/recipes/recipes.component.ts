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

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().then(r => this.recipes = r);
  }

}
