import { createAction, props } from "@ngrx/store";
import { Details } from "src/app/interface/user";

export enum recipeDetailType {
    addDetails = '[RECIPE DETAILS] ADDED',
    editDetails = '[RECIPE DETAILS] EDITED'
}

export const addRecipeDetails = createAction(
    recipeDetailType.addDetails,
    props<{details: Details}>()
)