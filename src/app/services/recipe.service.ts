import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interface/user';
import { Ingredient } from '../interface/ingredient';
import { IngredientService } from './ingredient.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [];
  private recipeSubject$: BehaviorSubject<Recipe[]> = new BehaviorSubject<
    Recipe[]
  >([
    {
      name: '',
      author: '',
      url: '',
      username: '',
      createdOn: '',
      ingredients: [],
    },
  ]);

  getRecipe$ = this.recipeSubject$.asObservable();

  constructor(private ingredientService: IngredientService) {}

  /**
   * Initializes recipes to the subject
   */
  initializeRecipes(): void {
    this.recipeSubject$.next(
      JSON.parse(localStorage.getItem('recipes') || '[]')
    );
  }

  postRecipes(recipe: Recipe) {
    // if localstorage already has existing recipes then assign it recipes array
    if (JSON.parse(localStorage.getItem('recipes') || '[]').length) {
      this.recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    }
    // push new recipe
    this.recipes.push(recipe);
    this.recipeSubject$.next(this.recipes);
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
    localStorage.removeItem('ingredients');

    this.ingredientService.ingredientSubject$.next([]);
  }
}
