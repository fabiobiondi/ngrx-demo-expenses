import { createAction, props } from '@ngrx/store';
import { Item } from '../../../../model/item';

// LOAD ACTIONS HERE: MISSING

export const addItem = createAction(
  '[Items] add',
  props<{ item: Partial<Item>}>()
);

export const addItemSuccess = createAction(
  '[Items] add success',
  props<{ item: Item}>()
);

export const addItemFailed = createAction(
  '[Items] add failed',
);

export const deleteItem = createAction(
  '[Items] delete',
  props<{ id: number }>()
);

export const deleteItemSuccess = createAction(
  '[Items] delete success',
  props<{ id: number }>()
);

export const deleteItemFailed = createAction(
  '[Items] delete failed',
);























/*
export const loadItems = createAction(
  '[Items] load'
);

export const loadItemsSuccess = createAction(
  '[Items] load success',
  props<{ items: Item[]}>()
);

export const loadItemsFailed = createAction(
  '[Items] load failed',
);
 */
