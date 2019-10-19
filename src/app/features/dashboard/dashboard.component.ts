import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UiFilterState } from './store/reducers/ui.reducer';
import { Item } from '../../model/item';

@Component({
  selector: 'fb-dashboard',
  template: `

    <h2 class="text-center">EXPENSE MANAGER</h2>
    
    <fb-items-form
      [categories]="categories$ | async"
      (save)="saveItemHandler($event)"
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
      (delete)="deleteItemHandler($event)"
    ></fb-items-list>
    
    <div class="d-flex justify-content-end">
      <span class="badge badge-primary">
        <span class="h4">TOTAL: 0</span>
      </span>
    </div>
  `,
})
export class DashboardComponent {
  items$: Observable<Item[]> ;
  categories$: Observable<string[]> ;
  filter$: Observable<UiFilterState> ;


  saveItemHandler(item: Partial<Item> ) {
    console.log(item);
  }

  deleteItemHandler(id: number) {
    console.log(id);
  }

  setFilterHandler(filter: UiFilterState) {
    console.log(filter);
  }

  openFilterPanelHandler() {
    console.log('open filter panel');
  }

  closeFilterPanelHandler() {
    console.log('open filter panel');
  }
}











/*
constructor(private store: Store<DashboardState>) {
  this.store.dispatch(loadItems())
}


saveItemHandler(item: Partial<Item> ) {
  this.store.dispatch(addItem({ item }));
}

deleteItemHandler(id: number) {
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
}*/
