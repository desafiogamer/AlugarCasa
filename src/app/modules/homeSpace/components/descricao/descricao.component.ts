import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-descricao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.css'
})
export class DescricaoComponent {
  public descricaoArray = [
    {
      src:'assets/icon/',
      alt: 'descricao1',
      title: 'Sem taxas ocultas',
      descricao: 'O preço exibido é o preço que você paga'
    },
    {
      src:'assets/icon/',
      alt: 'descricao2',
      title: 'Confirmação imediata',
      descricao: 'Reserva imediata para a maioria das acomodações'
    },
    {
      src:'assets/icon/',
      alt: 'descricao3',
      title: 'Cancelamento flexível',
      descricao: 'Muitas acomodações oferecem cancelamento flexível'
    },
  ]
}
