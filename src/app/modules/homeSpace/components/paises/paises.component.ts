import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

//directives
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../../shared/directives/spotlight.directive';

//interface
import { paisesInterface } from '../../interface/paises.interface';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [CommonModule, RevealDirective, SpotlightDirective],
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
      title: 'Itália'
    },
    {
      src: 'assets/img/881.webp',
      alt: 'pais3',
      title: 'França'
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
