import { createAction, props } from '@ngrx/store';

export enum UserActionTypes {
  LOGIN = '[User] LOGIN',
  LOGIN_COMPLETE = '[User] LOGIN_COMPLETE',
  LOGIN_ERROR = '[User] LOGIN_ERROR',
  LOGOUT = '[User] LOGOUT'
}

export const userLogin = createAction(
  UserActionTypes.LOGIN,
  props<{ username: string; status: boolean, timestamp: string }>()
);

export const userLogout = createAction(
    UserActionTypes.LOGOUT,
    props<{status: boolean}>()
)


