import { Component, OnInit} from '@angular/core';
import { HomeComponent } from '../../sections/home/home.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { AboutComponent } from '../../sections/about/about.component';
import { Modelo3DComponent } from '../../components/modelo-3-d/modelo-3-d.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HomeComponent,ServicesComponent,AboutComponent, Modelo3DComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    const btnAnimar: HTMLElement | null = document.getElementById('btn-menu');
    const menuMobile = document.querySelector('.menuMobile');

    if (btnAnimar) {
      btnAnimar.addEventListener('click', animarMenu);
    }

    function animarMenu() {
      if (btnAnimar && menuMobile) {
        menuMobile.classList.toggle('ativo');
      }
    }
  }
}
