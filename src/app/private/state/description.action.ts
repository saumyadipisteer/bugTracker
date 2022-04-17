import { createAction, props } from '@ngrx/store';
import { Description } from '../interface/description';

export enum descriptionActionType {
  subjectAdded = '[SUBJECT] ADDED',
  statusAdded = '[STATUS] ADDED',
  descriptionAdded = '[DESCRIPTION] ADDED',
  descriptionEdited = '[DESCRIPTION] EDITED',
}
export const subjectAction = createAction(
  descriptionActionType.subjectAdded,
  props<{ subject: string }>()
);

export const descriptionAction = createAction(
    descriptionActionType.descriptionAdded,
    props<{description: Description}>()
)