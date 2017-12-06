import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedRecipesComponent } from './subscribed-recipes.component';

describe('SubscribedRecipesComponent', () => {
  let component: SubscribedRecipesComponent;
  let fixture: ComponentFixture<SubscribedRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
