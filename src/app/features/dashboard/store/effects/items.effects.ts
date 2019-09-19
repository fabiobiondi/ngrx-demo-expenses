import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addItem, addItemFailed, addItemSuccess,
  deleteItem, deleteItemFailed, deleteItemSuccess,
  loadItems, loadItemsFailed, loadItemsSuccess
} from '../actions/items.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Item } from '../../../../model/item';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.module';

@Injectable()
export class ItemsEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadItems),
    switchMap(() => this.http.get<Item[]>('http://localhost:3000/products')
      .pipe(
        map(result => loadItemsSuccess({ items: result})),
        catchError(() => of(loadItemsFailed()))
      )
    )
  ));

  deleteItem$ = createEffect(() => this.actions$.pipe(
    ofType(deleteItem),
    switchMap((action) => this.http.delete(`http://localhost:3000/products/${action.id}`)
      .pipe(
        map(() => deleteItemSuccess({ id: action.id})),
        catchError( () => of(deleteItemFailed()))
      )
    )
  ));


  addItem$ = createEffect(() => this.actions$.pipe(
    ofType(addItem),
    mergeMap(action => this.http.post<Item>('http://localhost:3000/products', action.item)
      .pipe(
        map(result => addItemSuccess({ item: result })),
        catchError( () => of(addItemFailed()))
      )
    )
  ));

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}
