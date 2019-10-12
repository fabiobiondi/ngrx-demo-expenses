

import { Component } from '@angular/core';

@Component({
  selector: 'fb-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">

      <a class="navbar-brand"
         routerLink="/home" routerLinkActive="active">NGRX DEMO</a>

      <div class="navbar-collapse collapse">
        <ul class="navbar-nav">

          <li class="nav-item"
              routerLink="/" routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
          >
            <a class="nav-link">Home</a>
          </li>

          <li class="nav-item"
              routerLink="/dashboard" routerLinkActive="active">
            <a class="nav-link">dashboard</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavbarComponent { }
