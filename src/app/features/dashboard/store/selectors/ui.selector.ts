import { createSelector } from '@ngrx/store';
import { getDashboard } from '../reducers';
import { DashboardState } from '../../dashboard.module';
import { UiState } from '../reducers/ui.reducer';

export const getUi = createSelector(
  getDashboard,
  (state: DashboardState) => state.ui
);

export const getFilterConfig = createSelector(
  getUi,
  (state: UiState) => state.filter
);

