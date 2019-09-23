import { createReducer, on } from '@ngrx/store';
import { Item } from '../../../../model/item';
import {

} from '../actions/items.actions';

const initialState: Item[] = [];

export const itemsReducer = createReducer(
  initialState,
);
