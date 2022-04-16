import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Ingredient } from "src/app/interface/ingredient";

export const ingredientFeatureSelector = createFeatureSelector<Ingredient[]>("ingredients");

export const ingredientSelector = createSelector(
    ingredientFeatureSelector,
    (ingredient)=> ingredient
)