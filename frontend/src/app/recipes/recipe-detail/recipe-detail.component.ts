import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {

  recipe;

  constructor(private route: ActivatedRoute, private recipeDataService: RecipeService) {
  }

  ngOnInit() {
    this.route.data.subscribe(item => {
      this.recipe = item['recipe'];
      console.log(item);
    });
  }

}
