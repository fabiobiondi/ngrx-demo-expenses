import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { DashboardState } from '../../dashboard.module';
import { productReducer } from './items.reducer';
import { categoriesReducer } from './categories.reducer';
import { uiReducer } from './ui.reducer';

export const reducers: ActionReducerMap<DashboardState> = {
  /*items: productReducer,
  categories: categoriesReducer,
  ui: uiReducer*/

  items: () => [{}, {}, {}],
  categories: categoriesReducer,
  ui: () => ({ filter: {}, report: {}})
};

export const getDashboard = createFeatureSelector<DashboardState>('dashboard');

