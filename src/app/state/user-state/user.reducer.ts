import { createReducer, on } from '@ngrx/store';
import { LoginInfo } from 'src/app/interface/user-store.interface';
import { userLogin, userLogout } from './user.action';

export const initialUserCredentials: LoginInfo = {
  username: undefined,
  status: false,
  timestamp: undefined,
};

export const userReducer = createReducer(
  initialUserCredentials,
  on(userLogin, (state, { username, status, timestamp }) => {
    state = {
      username: username,
      status: status,
      timestamp: timestamp,
    };
    return state;
  }),
  on(userLogout, (state, { status = false }) => {
    state = { username: undefined, status: status };
    return state;
  })
);
