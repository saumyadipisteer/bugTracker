import { createReducer, on } from '@ngrx/store';
import { Description } from '../interface/description';
import { subjectAction } from './description.action';

export const initialBugDescriptionValue: Description = {
  subject: null,
  severity: '--Select--',
  status: '--Select--',
  describeTheBug: null,
};

export const subjectReducer = createReducer(
  initialBugDescriptionValue,
  on(subjectAction, (state, { subject }) => {
    state.subject = subject;
    return state;
  })
);
