import { Component } from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
    <fb-navbar></fb-navbar>    
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {

}
