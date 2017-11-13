import { Injectable } from '@angular/core';

import { RECIPES } from './mock-recipes';

@Injectable()
export class RecipeService {

  getRecipes() {
    return Promise.resolve(RECIPES);
  }

}
