import { createReducer, on } from '@ngrx/store';
import { Description } from '../interface/description';
import { descriptionAction, subjectAction } from './description.action';

export const initialBugDescriptionValue: Description = {
  subject: null,
  severity: '--Select--',
  status: '--Select--',
  describeTheBug: null,
};

export const descriptionReducer = createReducer(
  initialBugDescriptionValue,
  on(subjectAction, (state, { subject }) => {
    return { ...state, subject: subject };
  }),
  on(descriptionAction, (state, { description }) => {
    return { ...state, ...description };
  })
);
