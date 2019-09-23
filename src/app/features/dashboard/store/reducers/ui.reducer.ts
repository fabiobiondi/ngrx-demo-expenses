import { createReducer, on } from '@ngrx/store';

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
);
