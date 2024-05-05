import { Component, OnInit} from '@angular/core';

//components
import { HomeComponent } from '../../sections/home/home.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { AboutComponent } from '../../sections/about/about.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HomeComponent,ServicesComponent,AboutComponent, MenuComponent],
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
