import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet,  } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone:true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  router=inject(Router)
  isOpen = false;
  selectedExperience = 'Experiencias';
  private closetimer: any

  // Lista de experiencias con sus rutas
  outdoorExperiences = [
    { name: 'Senderismo', route: '/home' },
    { name: 'Camping', route: '/aventuras/camping' },
    { name: 'Escalada', route: '/aventuras/escalada' },
    { name: 'Ciclismo', route: '/aventuras/ciclismo' },
    { name: 'Rafting', route: '/aventuras/rafting' }
  ];

  onMouseEnter() {
    clearTimeout(this.closetimer); // Cancelar cierre pendiente
    this.isOpen = true;
  }
  
  onMouseLeave() {
    this.closetimer = setTimeout(() => {
      this.isOpen = false;
    }, 300); // 300ms de retardo antes de cerrar
  }
  
  
  
  toggleDropdown(state: boolean) {
    this.isOpen = state;
  }

  selectExperience(experience: string) {
    this.selectedExperience = experience;
    this.isOpen = false;
  }
}
