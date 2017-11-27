import { RecipeService } from './shared/recipe.service';
import { RecipeResolver } from './shared/recipe-resolver.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasonryModule } from 'angular2-masonry';

import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AppMaterialModule } from '../app-material/app-material.module';

const routes = [
  { path: '', component: RecipesComponent },
  { path: ':recipe', component: RecipeDetailComponent, resolve: { recipe: RecipeResolver } }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    RouterModule.forChild(routes),
    AppMaterialModule,
    MasonryModule
  ],
  declarations: [RecipesComponent, RecipeComponent, RecipeDetailComponent],
  providers: [
    RecipeService,
    RecipeResolver
  ]
})
export class RecipesModule { }
