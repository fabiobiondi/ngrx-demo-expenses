import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../model/item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fb-items-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    
    <!--FORM-->
    <form #f="ngForm" (ngSubmit)="saveHandler(f)">
      <input placeholder="Expense Description" type="text" name="text" [ngModel] class="form-control" required>
      <input placeholder="Amount ($)" type="number" name="amount" [ngModel] class="form-control" required>

      <select [ngModel] name="category" class="form-control" required>
        <option [value]="null">Select Category</option>
        <option *ngFor="let category of categories">{{category}}</option>
      </select>
      <button class="btn btn-primary" type="submit" [disabled]="f.invalid">ADD</button>
      <button class="btn btn-outline-info" type="button" (click)="f.reset()">CLEAN</button>
    </form>
  `,
})
export class ItemsFormComponent {
  @Input() categories: string[];
  @Output() save: EventEmitter<Partial<Item>> = new EventEmitter();

  saveHandler(form: NgForm) {
    this.save.emit({ ...form.value, date: Date.now()});
    form.reset();
  }
}
