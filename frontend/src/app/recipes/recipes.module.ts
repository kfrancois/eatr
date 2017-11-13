import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes = [
  { path: '', component: RecipesComponent },
  { path: ':recipe', component: RecipeDetailComponent }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RecipesComponent, RecipeComponent, RecipeDetailComponent]
})
export class RecipesModule { }
