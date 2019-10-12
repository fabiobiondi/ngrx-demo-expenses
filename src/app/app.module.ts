import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './store/reducers';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

export interface AppState {
  auth: { token: string, role: string};
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      { path: '', loadChildren: './features/home/home.module#HomeModule'},
      { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule'}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
