import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-min',
  standalone: true,
  imports: [],
  templateUrl: './card-min.component.html',
  styleUrl: './card-min.component.scss'
})
export class CardMinComponent {
  @Input() titulo = 'Esta sera la casa de tus sueños '
  @Input() secundary = 'habla con nosotros ahora mismo! '
  @Input() imagen = 'assets/videos/img2.png'

}
