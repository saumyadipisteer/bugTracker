import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Report } from 'src/app/interface/report';
import { reportActionType } from './report.action';

@Injectable()
export class ReportsEffect {
  addReports$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(reportActionType.addReport),
        tap((action) => {
          const reports: Report[] = JSON.parse(
            localStorage.getItem('reports') || '[]'
          );
          //localStorage.removeItem('reports');

          
        })
      ),
    { dispatch: false }
  );
  constructor(private action$: Actions) {}
}
