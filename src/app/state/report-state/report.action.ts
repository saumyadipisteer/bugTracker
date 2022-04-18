import { createAction, props } from '@ngrx/store';
import { Report } from 'src/app/interface/report';

export enum reportActionType {
  addReport = '[REPORT] ADDED',
  updateReport = '[REPORT] UPDATED',
  deleteReport = '[REPORT] DELETED',
}



export const addReport = createAction(
  reportActionType.addReport,
  props<{ report: Report[] }>()
);

export const deleteReport = createAction(
  reportActionType.deleteReport,
  props<{ index: number }>()
);

