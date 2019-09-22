import { createReducer } from '@ngrx/store';

const initialState = ['tax', 'home', 'travel'];

// fake reducer
export const categoriesReducer = createReducer(
  [...initialState]
  // add (TODO)
  // delete (TODO)
  // edit (TODO)
);

