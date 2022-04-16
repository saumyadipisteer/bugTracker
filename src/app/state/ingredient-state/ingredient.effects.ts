import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Ingredient } from 'src/app/interface/ingredient';
import { ingredientActionType } from './ingredient.action';

@Injectable()
export class IngredientsEffect {
  addIngredients$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(ingredientActionType.addIngredient),
        tap((action) => {
          const ingredients: Ingredient[] = JSON.parse(
            localStorage.getItem('ingredients') || '[]'
          );
          //localStorage.removeItem('ingredients');

          
        })
      ),
    { dispatch: false }
  );
  constructor(private action$: Actions) {}
}
