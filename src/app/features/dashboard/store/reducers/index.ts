import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { DashboardState } from '../../dashboard.module';
import { itemsReducer } from './items.reducer';
import { categoriesReducer } from './categories.reducer';
import { uiReducer } from './ui.reducer';

export const reducers: ActionReducerMap<DashboardState> = {
  items: itemsReducer,
  categories: categoriesReducer,
  ui: uiReducer
};

export const getDashboard = createFeatureSelector<DashboardState>('dashboard');

