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

export interface UiReportState {
  isOpen: boolean;
}

export interface UiState {
  filter: UiFilterState;
  report: UiReportState;
}

const initialState: UiState = {
  filter: {
    isOpen: false,
    category: null,
    minAmount: 0
  },
  report: {
    isOpen: false
  }
};

export const uiReducer = createReducer(
  initialState,
  /*on(openFilterPanel, state => ({ ...state, filter: { ...state.filter, isOpen: true} })),
  on(closeFilterPanel, state => ({ ...initialState, filter: { ...initialState.filter, isOpen: false} })),
  on(setFilter, (state, action) => ({ ...state, filter: { ... action.filter } })),*/
);
