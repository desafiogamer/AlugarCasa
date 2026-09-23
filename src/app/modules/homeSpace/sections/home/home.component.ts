import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public readonly numeros = signal([
    { valor: '120+', label: 'países atendidos' },
    { valor: '38 mil', label: 'acomodações ativas' },
    { valor: '4,9', label: 'nota média dos hóspedes' }
  ]);
}
