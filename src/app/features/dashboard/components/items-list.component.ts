import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'fb-items-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <!--nothing to show-->
    <div
      *ngIf="!items?.length; else list"
      class="alert alert-warning" 
    >
      No Items
    </div>
    
    <!--list-->
    <ng-template #list>
      <div *ngFor="let item of items" class="bg-light p-2 mt-1">
        <div class="d-flex justify-content-between">
          <div>
            {{item.date | date: 'dd MMM'}} - {{item.text}}
            <span class="text-center badge badge-primary">{{item.category}}</span>
          </div>
    
          <div>
            {{item.amount | currency}}
            <i class="fa fa-trash-alt" (click)="delete.emit(item.id)"></i>
          </div>
        </div>
      </div>
    </ng-template>
  `,
})
export class ItemsListComponent {
  @Input() items: Item[];
  @Output() delete: EventEmitter<number> = new EventEmitter();
}
