import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Description } from '../interface/description';

export const descriptionFeatureSelector =
  createFeatureSelector<Description>('subject');
export const descriptionSelector = createSelector(
  descriptionFeatureSelector,
  (description) => description
);
