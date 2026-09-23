import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

//interfaces
import { aboutInterface } from '../../interface/about.interface';

//directives
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public arrayDetails = signal<aboutInterface[]>([
    {
      title: 'Retirando sua chave',
      descricao: 'Você poderá se comunicar diretamente com o anfitrião para saber como retirar suas chaves. Não importa se você vai encontrá-lo pessoalmente ou vai usar uma caixa, é fácil entrar na acomodação e aproveitar suas férias!'
    },
    {
      title: 'Falando com o anfitrião',
      descricao: 'Você sempre pode entrar em contato com seu anfitrião se tiver dúvidas antes da viagem. Talvez você queira informar seu horário de chegada ou tenha um pedido especial – aproveite a comunicação sem stress a qualquer momento.'
    },
    {
      title: 'Fazendo check-in',
      descricao: 'Talvez você sempre tenha ficado em hotéis e não tem certeza como fazer o check-in em um apartamento ou casa de temporada. Não se preocupe, outros hóspedes também se sentem assim! É por isso que os anfitriões te dão todas as informações para você se hospedar tranquilamente.'
    },
  ])
}
