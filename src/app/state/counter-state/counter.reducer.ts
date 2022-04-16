import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { increament, decreament, reset } from './counter.action';

export const initialState: number = 0;

export const counterReducer: ActionReducer<number, Action> = createReducer(
  initialState,
  on(increament, (state) => {
    state++;
    return state;
  }),
  on(decreament, (state) => {
    if (state <= 0) {
      state = 0;
      return state;
    }
    state--;
    return state;
  }),
  on(reset, (state) => {
    state = 0;
    return state;
  })
);
