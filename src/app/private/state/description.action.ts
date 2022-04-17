import { createAction, props } from '@ngrx/store';

export enum descriptionActionType {
  subjectAdded = '[SUBJECT] ADDED',
  severityAdded = '[SEVERITY] ADDED',
  descriptionAdded = '[DESCRIPTION] ADDED',
  descriptionEdited = '[DESCRIPTION] EDITED',
}
export const descriptionAction = createAction(
  descriptionActionType.descriptionAdded,
  props<{ description: string }>()
);