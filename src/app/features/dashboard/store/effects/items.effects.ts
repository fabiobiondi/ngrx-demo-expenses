import { Injectable } from '@angular/core';

@Injectable()
export class ItemsEffects {

}




































/*


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

*/

