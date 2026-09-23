import { Component } from '@angular/core';

//components
import { HomeComponent } from '../../sections/home/home.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { AboutComponent } from '../../sections/about/about.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HomeComponent, ServicesComponent, AboutComponent, MenuComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  public readonly ano = new Date().getFullYear();

  public readonly colunasRodape = [
    {
      titulo: 'Explorar',
      links: [
        { label: 'Destinos', href: '#services' },
        { label: 'Estadias únicas', href: '#services' },
        { label: 'Casas para família', href: '#services' },
        { label: 'Ofertas da semana', href: '#services' }
      ]
    },
    {
      titulo: 'Empresa',
      links: [
        { label: 'Sobre nós', href: '#about' },
        { label: 'Seja anfitrião', href: '#about' },
        { label: 'Carreiras', href: '#about' },
        { label: 'Imprensa', href: '#about' }
      ]
    },
    {
      titulo: 'Suporte',
      links: [
        { label: 'Central de ajuda', href: '#about' },
        { label: 'Cancelamentos', href: '#about' },
        { label: 'Termos de uso', href: '#about' },
        { label: 'Privacidade', href: '#about' }
      ]
    }
  ];

  public readonly redes = [
    {
      nome: 'Instagram',
      href: '#',
      path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 2c-3.1 0-3.5 0-4.8.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.84-.4.4-.64.8-.84 1.3-.16.4-.35 1-.4 2.1C2.5 10 2.5 10.4 2.5 12s0 2-.07 3.3c.05 1.1.24 1.7.4 2.1.2.5.44.9.84 1.3.4.4.8.64 1.3.84.4.16 1 .35 2.1.4 1.3.07 1.7.07 4.8.07s3.5 0 4.8-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.84.4-.4.64-.8.84-1.3.16-.4.35-1 .4-2.1.07-1.3.07-1.7.07-3.3s0-2-.07-3.3c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.44-.9-.84-1.3-.4-.4-.8-.64-1.3-.84-.4-.16-1-.35-2.1-.4-1.3-.07-1.7-.07-4.8-.07m0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8m0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8m5.6-2.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
    },
    {
      nome: 'X',
      href: '#',
      path: 'M17.5 3h3l-6.6 7.5L21.8 21h-6l-4.7-6.1L5.7 21h-3l7-8L2.5 3h6.2l4.2 5.6zm-1 16h1.7L7.6 4.8H5.8z'
    },
    {
      nome: 'LinkedIn',
      href: '#',
      path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9.5h4v11H3zm7 0h3.8v1.5h.05c.53-.95 1.83-1.95 3.75-1.95 4 0 4.75 2.5 4.75 5.8v5.65h-4v-5c0-1.2 0-2.75-1.7-2.75s-1.95 1.3-1.95 2.65v5.1h-4z'
    }
  ];
}
