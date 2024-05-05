import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

//interface
import { paisesInterface } from '../../interface/paises.interface';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  public Paisesarray = signal<paisesInterface[]>([
    {
      src: 'assets/img/90.webp',
      alt: 'pais1',
      title: 'Espanha'
    },
    {
      src: 'assets/img/73.webp',
      alt: 'pais2',
      title: 'itália'
    },
    {
      src: 'assets/img/881.webp',
      alt: 'pais3',
      title: 'Fraça'
    },
    {
      src: 'assets/img/150.webp',
      alt: 'pais4',
      title: 'Grécia'
    },
    {
      src: 'assets/img/84.webp',
      alt: 'pais5',
      title: 'Suíça'
    },
  ])
}
