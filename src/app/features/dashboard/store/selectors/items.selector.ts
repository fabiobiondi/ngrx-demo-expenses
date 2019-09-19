import { createSelector } from '@ngrx/store';
import { Item } from '../../../../model/item';
import { getDashboard } from '../reducers';
import { DashboardState } from '../../dashboard.module';
import { getFilterConfig, getUi } from './ui.selector';
import { UiFilterState, UiState } from '../reducers/ui.reducer';


export const getItems = createSelector(
  getDashboard,
  (state: DashboardState) => state.items
);


export const getItemsFiltered = createSelector(
  getItems,
  getFilterConfig,
  (items: Item[], filter: UiFilterState) => {
    return items.filter(
      item =>
        (item.category === filter.category || !filter.category) &&
         item.amount >= filter.minAmount
    );
  }
);

export const getTotal = createSelector(
  getItems,
  (state: Item[]) => state.reduce((acc: number, curr: Item) => {
      return acc + +curr.amount;
    }, 0)
);


