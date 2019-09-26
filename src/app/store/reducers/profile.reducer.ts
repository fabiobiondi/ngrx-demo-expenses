import { createReducer } from '@ngrx/store';

const initialState = { name: 'Mario Rossi' };

export const profileReducer = createReducer(
  initialState
);
