import { createReducer, on } from '@ngrx/store';
import { Item } from '../../../../model/item';
import {

} from '../actions/items.actions';
import { loadItemsSuccess } from '../actions/items.actions';
import { deleteItemSuccess } from '../actions/items.actions';
import { addItemSuccess } from '../actions/items.actions';

const initialState: Item[] = [];

export const itemsReducer = createReducer(
  initialState,
);















































/*
on(loadItemsSuccess, (state, action) => [...action.items ]),
on(deleteItemSuccess, (state, action) => state.filter(p => p.id !== action.id)),
on(addItemSuccess, (state, action) => [...state, { ...action.item }]),
*/
