import { Component } from '@angular/core';
import { HomeComponent } from '../../sections/home/home.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { AboutComponent } from '../../sections/about/about.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HomeComponent,ServicesComponent,AboutComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
