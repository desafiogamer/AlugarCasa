import { Component } from '@angular/core';
import { PaisesComponent } from '../../components/paises/paises.component';
import { DescricaoComponent } from '../../components/descricao/descricao.component';
import { ApartamentosComponent } from '../../components/apartamentos/apartamentos.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [PaisesComponent,DescricaoComponent,ApartamentosComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
