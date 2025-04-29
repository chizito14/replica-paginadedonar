import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-how-work',
  standalone:true,
  imports: [],
  templateUrl: './how-work.component.html',
  styleUrl: './how-work.component.scss'
})
export class HowWorkComponent {
router = inject(Router)
  funcionclick(){
  this.router.navigateByUrl("home")
}

}
