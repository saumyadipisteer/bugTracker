import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Description } from '../interface/description';

export const descriptionFeatureSelector =
  createFeatureSelector<Description>('description');
export const descriptionSelector = createSelector(
  descriptionFeatureSelector,
  (description) => description
);
