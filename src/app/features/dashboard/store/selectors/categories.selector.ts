import { createSelector } from '@ngrx/store';
import { getDashboard } from '../reducers';
import { DashboardState } from '../../dashboard.module';

export const getCategories = createSelector(
  getDashboard,
  (state: DashboardState) => state.categories
);
