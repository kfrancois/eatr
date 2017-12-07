import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/user.model';
import { RecipeService } from '../../recipes/shared/recipe.service';
import { SubscriptionService } from '../shared/subscription.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.scss'],
  providers: [RecipeService, SubscriptionService]
})
export class OverviewComponent implements OnInit {

  private _user;
  private _recipes;

  public loaded: boolean;
  public otherUser = false;
  public otherUsername = 'user';
  public isSubscribed: boolean;

  constructor(private activatedRoute: ActivatedRoute, private _recipeService: RecipeService,
    private _subscriptionService: SubscriptionService, public snackBar: MatSnackBar) {
    this.activatedRoute.params.subscribe(params => {
      this._user = params['user'];

      if (this._user) {
        this._subscriptionService.getUsername(this._user).subscribe(res => {
          this.otherUsername = res;
          this.otherUser = res !== JSON.parse(localStorage.getItem('currentUser')).username;
        });
        this._subscriptionService.isSubscribedto(this._user).subscribe(s => this.isSubscribed = s);
      }
    });
  }

  ngOnInit() {
    if (this.otherUser) {
      this._recipeService.getRecipes(this._user).subscribe(recipes => {
        this._recipes = recipes;
        this.loaded = true;
      });
    } else {
      this._recipeService.recipes.subscribe(recipes => {
        this._recipes = recipes;
        this.loaded = true;
      });
    }
  }

  get recipes() {
    return this._recipes;
  }

  subscribe() {
    this._subscriptionService.subscribeTo(this._user).subscribe(res => {
      this.isSubscribed = true;
      this.openSnackBar('Subscribed!');
    });
  }

  unsubscribe() {
    this._subscriptionService.unsubscribeFrom(this._user).subscribe(res => {
      this.isSubscribed = false;
      this.openSnackBar('Unsubscribed!');
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
