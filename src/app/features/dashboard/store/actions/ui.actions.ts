import { createAction, props } from '@ngrx/store';
import { UiFilterState } from '../reducers/ui.reducer';

export const openFilterPanel = createAction(
  '[ui] Open Filter Panel',
);

export const closeFilterPanel = createAction(
  '[ui] close Filter Panel',
);

export const setFilter = createAction(
  '[ui] Set Filter',
  props<{ filter: UiFilterState }>()
);
