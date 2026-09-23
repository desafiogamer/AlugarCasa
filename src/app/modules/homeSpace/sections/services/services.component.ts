import { Component } from '@angular/core';
import { PaisesComponent } from '../../components/paises/paises.component';
import { DescricaoComponent } from '../../components/descricao/descricao.component';
import { ApartamentosComponent } from '../../components/apartamentos/apartamentos.component';

//directives
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [PaisesComponent, DescricaoComponent, ApartamentosComponent, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
