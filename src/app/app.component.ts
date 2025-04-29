import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './presentation/sub-components/header/header.component';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [
    RouterOutlet 
  ],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'gana-turifa';
  router = inject(Router)
}
