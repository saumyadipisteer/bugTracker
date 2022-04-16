import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/interface/ingredient';

export enum ingredientActionType {
  addIngredient = '[INGREDIENT] ADDED',
  updateIngredient = '[INGREDIENT] UPDATED',
  deleteIngredient = '[INGREDIENT] DELETED',
}



export const addIngredient = createAction(
  ingredientActionType.addIngredient,
  props<{ ingredient: Ingredient[] }>()
);

export const deleteIngredient = createAction(
  ingredientActionType.deleteIngredient,
  props<{ index: number }>()
);

