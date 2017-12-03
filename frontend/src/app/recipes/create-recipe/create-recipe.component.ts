import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe.model';

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

  constructor(private fb: FormBuilder, private _recipeService: RecipeService, private _router: Router) { }

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

    this.ingredients.statusChanges.debounceTime(400).distinctUntilChanged().subscribe(data => {
      if (data === 'VALID') {
        this.ingredients.push(this.newIngredient());
      }
    });

    this.steps.statusChanges.debounceTime(400).distinctUntilChanged().subscribe(data => {
      if (data === 'VALID') {
        this.steps.push(this.newStep());
      }
    });
  }

  newStep(): FormGroup {
    return this.fb.group({
      step: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(256)]]
    });
  }

  newIngredient(): FormGroup {
    return this.fb.group({
      amount: [''],
      unit: [''],
      ingredientName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
  }

}
