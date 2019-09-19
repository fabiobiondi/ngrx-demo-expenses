import { createReducer } from '@ngrx/store';

const initialState = { token: 'abc', role: 'guest'};

export const authReducer = createReducer(
  initialState
);
