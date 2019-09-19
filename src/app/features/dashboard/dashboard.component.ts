import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// actions
import { addItem, deleteItem, loadItems } from './store/actions/items.actions';
import { closeFilterPanel, openFilterPanel, setFilter } from './store/actions/ui.actions';
// selectors
import { getTotal, getItemsFiltered } from './store/selectors/items.selector';
import { getCategories } from './store/selectors/categories.selector';
import { getFilterConfig } from './store/selectors/ui.selector';
// model
import { AppState } from '../../app.module';
import { UiFilterState } from './store/reducers/ui.reducer';
import { Item } from '../../model/item';

@Component({
  selector: 'fb-items',
  template: `
    <fb-items-form
      [categories]="categories$ | async"
      (save)="saveItem($event)"
    ></fb-items-form>
    
    <fb-items-filters
      [categories]="categories$ | async"
      [filter]="filter$ | async"
      (openFilter)="openFilterPanelHandler()"
      (closeFilter)="closeFilterPanelHandler()"
      (setFilter)="setFilterHandler($event)"
    ></fb-items-filters>

    <fb-items-list
      [items]="items$ | async"
      (delete)="deleteItem($event)"
    ></fb-items-list>
    
    <div class="badge badge-primary d-flex justify-content-end">
      <span class="h4">TOTAL: {{total$ | async | currency}}</span>
    </div>
  `,
})
export class ItemsComponent {
  items$: Observable<Item[]> = this.store.pipe(select(getItemsFiltered));
  categories$: Observable<string[]> = this.store.pipe(select(getCategories));
  filter$: Observable<UiFilterState> = this.store.pipe(select(getFilterConfig));
  total$: Observable<number> = this.store.pipe(select(getTotal));

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadItems());
  }

  saveItem(item: Partial<Item> ) {
    this.store.dispatch(addItem({ item }));
  }

  deleteItem(id: number) {
    this.store.dispatch(deleteItem({ id }));
  }

  setFilterHandler(filter: UiFilterState) {
    this.store.dispatch(setFilter({ filter }));
  }

  openFilterPanelHandler() {
    this.store.dispatch(openFilterPanel());
  }

  closeFilterPanelHandler() {
    this.store.dispatch(closeFilterPanel());
  }
}
