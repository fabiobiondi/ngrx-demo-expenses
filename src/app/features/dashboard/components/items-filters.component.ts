import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UiFilterState } from '../store/reducers/ui.reducer';

@Component({
  selector: 'fb-items-filters',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="d-flex justify-content-end align-items-center"
      *ngIf="formState.isOpen; else showFilterBtn"
    >
      <!--Min Amount - Range-->
      <span class="mr-2">€ {{formState.minAmount}}</span>
      <input
        type="range" min="0" max="1000" step="10"
        [(ngModel)]="formState.minAmount"
        value="0"
        (change)="setFilterHandler()"
      >
      <!--Select a category-->
      <span
        class="badge ml-2"
        *ngFor="let category of categories"
        [ngClass]="{'badge-primary': category === formState.category}"
        (click)="setFilterCategory(category)"
      >{{category}}</span>

      <!--Close filter button-->
      <i class="fa fa-times-circle pl-2" (click)="closeFilter.emit()"></i>
    </div>

    <!--Open filter button-->
    <ng-template #showFilterBtn>
      <div class="d-flex justify-content-end align-items-center">
        <button class="badge bg-dark text-white" (click)="openFilter.emit()">Show Filter</button>
      </div>
    </ng-template>
    
    <hr>
  `,
})
export class ItemsFiltersComponent  {
  @Output() setFilter: EventEmitter<UiFilterState> = new EventEmitter<UiFilterState>();
  @Output() openFilter: EventEmitter<void> = new EventEmitter();
  @Output() closeFilter: EventEmitter<void> = new EventEmitter();
  @Input() categories: string[];
  @Input() set filter(filter: UiFilterState) {
    this.formState = {...filter};
  }

  // local state
  formState: UiFilterState;

  setFilterHandler() {
    this.setFilter.emit(this.formState)
  }

  setFilterCategory(category: string) {
    this.formState.category = category;
    this.setFilterHandler();
  }

}
