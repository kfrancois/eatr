
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Rx';
import { RecipeService } from './recipe.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
    constructor(private recipeService: RecipeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> {
        return this.recipeService.getRecipe(route.params['recipe']);
    }
}
