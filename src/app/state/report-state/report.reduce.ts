import { createReducer, on } from '@ngrx/store';
import { Report } from 'src/app/interface/report';
import { addReport } from './report.action';

export const initialReportValue: Report[] = [];

export const reportReducer = createReducer(
  initialReportValue,
  on(addReport, (state, { report }) => {
    
    return [...state, ...report]
  }),

);
