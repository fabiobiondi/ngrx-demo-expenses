import { createReducer, on } from '@ngrx/store';
import {
  closeFilterPanel,
  openFilterPanel,
  setFilter,
} from '../actions/ui.actions';

export interface UiFilterState {
  isOpen: boolean;
  category: string | null;
  minAmount: number;
}

export interface UiState {
  filter: UiFilterState;
}

const initialState: UiState = {
  filter: {
    isOpen: false,
    category: null,
    minAmount: 0
  },
};

export const uiReducer = createReducer(
  initialState,
  on(openFilterPanel, state => ({ ...state, filter: { ...state.filter, isOpen: true} })),
  on(closeFilterPanel, () => ({ ...initialState, filter: { ...initialState.filter, isOpen: false} })),
  on(setFilter, (state, action) => ({ ...state, filter: { ... action.filter } })),
);
