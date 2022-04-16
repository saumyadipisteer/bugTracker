import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from '../interface/ingredient';
import { Recipe } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  ingredientSubject$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  useIngredientSubject: Observable<Ingredient[]> =
    this.ingredientSubject$.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Sets recipe's ingredient in localstorage and updates subject
   * @param data Ingreident[]
   * @returns void
   */
  setIngredients(data: Ingredient[]): void {
    this.ingredientSubject$.next(data);
    localStorage.setItem('ingredients', JSON.stringify(data));
  }

  /**
   * @description Fetches all the ingredient list from the localstorage
   * and refreshes the subject
   * @param none
   * @returns Observable<Ingredient[]>
   */
  getIngredients(): Observable<Ingredient[]> {
    this.ingredientSubject$.next(
      JSON.parse(localStorage.getItem('ingredients') || '[]')
    );
    return this.useIngredientSubject;
  }

  /**
   * Deletes ingredient from localstorage and the ingredient subject
   * @param index number
   * @returns void
   */
  deleteIngredient(index: number): void {
    localStorage.setItem(
      'ingredients',
      JSON.stringify(
        this.rewriteArray(
          JSON.parse(localStorage.getItem('ingredients') || '{}'),
          index
        )
      )
    );

    this.ingredientSubject$.next(
      JSON.parse(localStorage.getItem('ingredients') || '{}')
    );
  }

  /**
   * Removes item from array and rewrites the array
   * @param localStorageItem Ingredient[]
   * @param index number - will remove the item from array
   * @returns Ingredient[]
   */
  private rewriteArray(
    localStorageItem: Ingredient[],
    index: number
  ): Ingredient[] {
    let splicedItem = localStorageItem.splice(index).splice(1);
    return [...localStorageItem, ...splicedItem];
  }

  updateIngredient(index: number) {
    console.log(localStorage.getItem('ingredients'));
  }

  /**
   * Fetches all recipe
   * @returns `Recipe`
   */
  getAllRecipes(): Recipe[] {
    return JSON.parse(localStorage.getItem('recipes') || '[]');
  }
}
