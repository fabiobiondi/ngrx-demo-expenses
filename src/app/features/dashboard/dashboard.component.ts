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
export class DashboardComponent {
  items$: Observable<Item[]> ;
  categories$: Observable<string[]> ;
  filter$: Observable<UiFilterState> ;


  saveItem(item: Partial<Item> ) {
    console.log(item);
  }

  deleteItem(id: number) {
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
