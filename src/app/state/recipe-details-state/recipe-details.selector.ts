import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Details } from 'src/app/interface/user';

export const detailsFeatureSelector = createFeatureSelector<Details>('details');

export const detailsSelector = createSelector(
  detailsFeatureSelector,
  (details) => details
);
