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
);
