import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../sub-components/header/header.component';
import { VideoComponent } from '../../sub-components/video/video.component';
import { CardHighComponent } from '../../sub-components/card-high/card-high.component';
import { CardMinComponent } from '../../sub-components/card-min/card-min.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    HeaderComponent,
    VideoComponent,
    CardHighComponent,
    CardMinComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
lista = [
  {
    "titulo": "Expedición Glaciar en Patagonia\nAventura entre hielos milenarios",
    "secundary": "¡Reserva tu cupo para navegar entre icebergs azules!",
    "imagen": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "titulo": "Travesía en Kayak por Fiordos\nNórdicos - Nivel principiante",
    "secundary": "Inscríbete ahora para vivir 3 días entre auroras boreales",
    "imagen": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "titulo": "Safari Nocturno en Sabana Africana\nCon guías expertos en vida silvestre",
    "secundary": "Últimos lugares disponibles para temporada seca",
    "imagen": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "titulo": "Curso de Supervivencia en Bosque\nTropical -  internacional",
    "secundary": "¡Atrévete a dominar la jungla! Inicio cada lunes",
    "imagen": "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "titulo": "Ruta Gastronómica en Tailandia\nMercados flotantes y cocina callejera",
    "secundary": "Grupo reducido - Incluye 15 clases de cocina",
    "imagen": "https://images.unsplash.com/photo-1520645521318-f03a712f0e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "titulo": "Ascenso a Volcán Activo\nEn Centroamérica con equipo especializado",
    "secundary": "Vive la emisión de gases desde el cráter - Salidas diarias",
    "imagen": "https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
]
}
