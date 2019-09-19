import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  addItem, addItemFailed, addItemSuccess,
  deleteItem, deleteItemFailed, deleteItemSuccess,
  loadItems, loadItemsFailed, loadItemsSuccess
} from '../actions/items.actions';
import { ItemsService } from '../../services/items.service';

@Injectable()
export class ItemsEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadItems),
    mergeMap(() => this.itemsService.loadItems()
      .pipe(
        map(result => loadItemsSuccess({ items: result})),
        catchError(() => of(loadItemsFailed()))
      )
    )
  ));

  deleteItem$ = createEffect(() => this.actions$.pipe(
    ofType(deleteItem),
    mergeMap((action) => this.itemsService.deleteItem(action.id)
      .pipe(
        map(() => deleteItemSuccess({ id: action.id})),
        catchError( () => of(deleteItemFailed()))
      )
    )
  ));

  addItem$ = createEffect(() => this.actions$.pipe(
    ofType(addItem),
    mergeMap(action => this.itemsService.addItem(action.item)
      .pipe(
        map(result => addItemSuccess({ item: result })),
        catchError( () => of(addItemFailed()))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {}
}
