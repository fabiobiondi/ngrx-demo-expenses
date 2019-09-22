import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './store/effects/items.effects';
import { Item } from '../../model/item';
import { ItemsComponent } from './dashboard.component';
import { UiState } from './store/reducers/ui.reducer';
import { ItemsFiltersComponent } from './components/items-filters.component';
import { ItemsListComponent } from './components/items-list.component';
import { ItemsFormComponent } from './components/items-form.component';
import { ItemsService } from './services/items.service';


export interface DashboardState {
  items: Item[];
  categories: string[];
  ui: UiState;
}

@NgModule({
  declarations: [ItemsComponent, ItemsFiltersComponent, ItemsListComponent, ItemsFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    StoreModule.forFeature('dashboard', reducers),
    DashboardRoutingModule,
    EffectsModule.forFeature([
      ItemsEffects
    ]),
  ],
  providers: [
    ItemsService
  ]
})
export class DashboardModule { }
