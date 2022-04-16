import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, tap } from 'rxjs';
import { UserActionTypes } from './user.action';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActionTypes.LOGIN),
        tap((action) => {
          sessionStorage.setItem('currentUser', JSON.stringify(action));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActionTypes.LOGOUT),
        tap((action) => {
          sessionStorage.removeItem('currentUser');
          this.router.parseUrl('/user/signin');
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
