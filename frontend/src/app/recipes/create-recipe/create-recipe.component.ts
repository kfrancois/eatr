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
  units = ['kg', 'l', 'spoons'];

  get ingredients(): FormArray {
    return <FormArray>this.recipeForm.get('ingredients');
  }
  get steps(): FormArray {
    return <FormArray>this.recipeForm.get('steps');
  }

  constructor(private fb: FormBuilder, private _recipeService: RecipeService,
    private _router: Router, private _authService: AuthenticationService) { }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required, Validators.minLength(2)]],
      people: ['', [Validators.required, Validators.min(0)]],
      time: ['', [Validators.required, Validators.min(0)]],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      ingredients: this.fb.array([this.newIngredient()]),
      steps: this.fb.array([this.newStep()])
    });

    this.ingredients.statusChanges.debounceTime(100).distinctUntilChanged().subscribe(data => {
      if (data === 'VALID') {
        this.ingredients.push(this.newIngredient());
      }
    });

    this.steps.statusChanges.debounceTime(100).distinctUntilChanged().subscribe(data => {
      if (data === 'VALID') {
        this.steps.push(this.newStep());
      }
    });
  }

  newStep(): FormGroup {
    return this.fb.group({
      step: [''] // , [Validators.required, Validators.minLength(5), Validators.maxLength(256)]]
    });
  }

  newIngredient(): FormGroup {
    return this.fb.group({
      amount: [''],
      unit: [''],
      ingredientName: [''] // , [Validators.required, Validators.minLength(2)]]
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

    this._recipeService.createRecipe(recipe).subscribe(item => {
      console.log(item);
    });
  }

}
