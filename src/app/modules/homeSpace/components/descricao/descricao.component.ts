import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DescricaoInterface } from '../../interface/descricao.interface';

@Component({
  selector: 'app-descricao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.css'
})
export class DescricaoComponent {
  public descricaoArray = signal<DescricaoInterface[]>([
    {
      src:'assets/icons/cadeado (1).webp',
      alt: 'descricao1',
      title: 'Sem taxas ocultas',
      descricao: 'O preço exibido é o preço que você paga'
    },
    {
      src:'assets/icons/proximo-botao (1).webp',
      alt: 'descricao2',
      title: 'Confirmação imediata',
      descricao: 'Reserva imediata para a maioria das acomodações'
    },
    {
      src:'assets/icons/calendario-_1_.webp',
      alt: 'descricao3',
      title: 'Cancelamento flexível',
      descricao: 'Muitas acomodações oferecem cancelamento flexível'
    },
  ])
}
