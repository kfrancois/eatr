import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AuthenticationService } from '../../user/shared/authentication.service';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {

  private _appUrl = 'http://localhost:4200/API';
  private _recipes;

  constructor(private http: Http, private auth: AuthenticationService) {
  }

  get allRecipes(): Observable<Recipe[]> {
    return this.http.get(`${this._appUrl}/recipes/all`, {
      headers: new Headers({
        Authorization: `Bearer ${this.auth.token}`
      })
    }).map(r => r.json().map(item => Recipe.fromJSON(item)));
  }

  get recipes(): Observable<Recipe[]> {
    return this.http.get(`${this._appUrl}/recipes`, {
      headers: new Headers({
        Authorization: `Bearer ${this.auth.token}`
      })
    }).map(r => r.json().map(item => Recipe.fromJSON(item)));
    // return Promise.resolve(RECIPES);
  }

  getRecipe(id): Observable<Recipe> {
    return this.http.get(`${this._appUrl}/recipe/${id}`)
      .map(response => response.json()).map(item => Recipe.fromJSON(item));
  }

  createRecipe(recipe): Observable<Recipe> {
    return this.http.post(`${this._appUrl}/recipes`, recipe, {
      headers: new Headers({ Authorization: `Bearer ${this.auth.token}` })
    }).map(res => res.json()).map(item => Recipe.fromJSON(item));
  }
}
