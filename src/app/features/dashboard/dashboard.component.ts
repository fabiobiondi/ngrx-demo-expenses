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
import { DashboardState } from './dashboard.module';
import { getDashboard } from './store/reducers';

@Component({
  selector: 'fb-dashboard',
  template: `

    <h2 class="text-center">EXPENSE MANAGER</h2>
    
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
    
    <div class="d-flex justify-content-end">
      <span class="badge badge-primary">
        <span class="h4">TOTAL: 0</span>
      </span>
    </div>
  `,
})
export class ItemsComponent {
  items$: Observable<Item[]> ; // = this.store.pipe(select(getItemsFiltered));
  categories$: Observable<string[]> ; // = this.store.pipe(select(getCategories));
  filter$: Observable<UiFilterState> ; // = this.store.pipe(select(getFilterConfig));


  saveItem(item: Partial<Item> ) {
    console.log(item);
    // this.store.dispatch(addItem({ item }));
  }

  deleteItem(id: number) {
    console.log(id);
    // this.store.dispatch(deleteItem({ id }));
  }

  setFilterHandler(filter: UiFilterState) {
    console.log(filter);
    // this.store.dispatch(setFilter({ filter }));
  }

  openFilterPanelHandler() {
    console.log('open filter panel');
    // this.store.dispatch(openFilterPanel());
  }

  closeFilterPanelHandler() {
    console.log('open filter panel');
    // this.store.dispatch(closeFilterPanel());
  }
}
