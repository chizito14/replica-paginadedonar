import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HowWorkComponent } from './how-work/how-work.component';


@Component({
  selector: 'app-header',
  standalone:true,
  imports: [
    DropdownComponent,
    HowWorkComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
router= inject(Router)




}
