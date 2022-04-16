import { createReducer, on } from '@ngrx/store';
import { Details } from 'src/app/interface/user';
import { addRecipeDetails } from './recipe-details.action';

export const initialDetailValue: Details = { name: null, author: null, url: null };

export const detailsReducer = createReducer(
  initialDetailValue,
  on(addRecipeDetails, (state, { details }) => {
    console.log(details);
    state = {
      name: details?.name,
      author: details?.author,
      url: details?.url,
    };
    return state;
  })
);
