import { createReducer, on } from '@ngrx/store';
import { Ingredient } from 'src/app/interface/ingredient';
import { addIngredient } from './ingredient.action';

export const initialIngredientValue: Ingredient[] = [];

export const ingredientReducer = createReducer(
  initialIngredientValue,
  on(addIngredient, (state, { ingredient }) => {
    
    return [...state, ...ingredient]
  }),

);
