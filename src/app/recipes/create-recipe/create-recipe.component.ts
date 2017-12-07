import { AuthenticationService } from '../../user/shared/authentication.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { User } from '../../user/shared/user.model';

@Component({
  selector: 'app-create-recipe',
  templateUrl: 'create-recipe.component.html',
  styleUrls: ['create-recipe.component.scss'],
  providers: [RecipeService]
})
export class CreateRecipeComponent implements OnInit {

  @Output() public newRecipe = new EventEmitter<Recipe>();

  public recipeForm: FormGroup;

  categories = ['Italian', 'Mexican', 'Asian'];
  units = ['g', 'kg', 'cl', 'ml', 'l', 'tsp', 'tbs'];

  get ingredients(): FormArray {
    return <FormArray>this.recipeForm.get('ingredients');
  }
  ingrCounter = 0;
  get steps(): FormArray {
    return <FormArray>this.recipeForm.get('steps');
  }
  stepCounter = 0;

  constructor(private _formBuilder: FormBuilder, private _recipeService: RecipeService,
    private _router: Router, private _authService: AuthenticationService) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.recipeForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required, Validators.minLength(2)]],
      people: ['', [Validators.required, Validators.min(0)]],
      time: ['', [Validators.required, Validators.min(0)]],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      ingredients: this._formBuilder.array([this.newIngredient()]),
      steps: this._formBuilder.array([this.newStep()])
    });

    this.ingredients.statusChanges.subscribe(data => {
      const lastControl = this.ingredients.controls[this.ingrCounter];
      if (lastControl.valid && lastControl.value.ingredientName !== '') {
        this.ingrCounter++;
        this.ingredients.push(this.newIngredient());
      }
    });

    this.steps.statusChanges.subscribe(data => {
      const lastControl = this.steps.controls[this.stepCounter];
      if (lastControl.valid && lastControl.value.step !== '') {
        this.stepCounter++;
        this.steps.push(this.newStep());
      }
    });
  }

  newStep(): FormGroup {
    return this._formBuilder.group({
      step: ['', [Validators.minLength(10), Validators.maxLength(256)]]
    });
  }

  newIngredient(): FormGroup {
    return this._formBuilder.group({
      amount: [''],
      unit: [''],
      ingredientName: ['', [Validators.minLength(2)]]
    });
  }

  onSubmit() {

    const recipe = new Recipe(this.recipeForm.value.name, User.fromToken(this._authService.token), this.recipeForm.value.people,
      this.recipeForm.value.category, this.recipeForm.value.image, this.recipeForm.value.description,
      `${this.recipeForm.value.time} minutes`);

    const ingredients = [];
    for (const ing of this.recipeForm.value.ingredients) {
      if (ing.ingredientName.length > 2) {
        ingredients.push(new Ingredient(ing.ingredientName, ing.amount === '' ? 0 : ing.amount, ing.unit));
      }
    }
    recipe.ingredients = ingredients;

    const steps = [];
    for (const step of this.recipeForm.value.steps) {
      if (step.step.length > 5) {
        steps.push(step.step);
      }
    }
    recipe.steps = steps;


    if (this.recipeForm.valid) {
      this._recipeService.createRecipe(recipe).subscribe(item => {
        this._router.navigate([`/recipes/${item.id}`]);
      });
    }
  }

}
