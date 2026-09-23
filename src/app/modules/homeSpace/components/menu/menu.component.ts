import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  signal
} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  public readonly links = [
    { href: '#inicio', label: 'Início', id: 'inicio' },
    { href: '#services', label: 'Serviços', id: 'services' },
    { href: '#about', label: 'Ajuda', id: 'about' }
  ];

  public readonly menuAberto = signal(false);
  public readonly rolou = signal(false);
  public readonly secaoAtiva = signal('inicio');

  private observer?: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll(): void {
    this.rolou.set(window.scrollY > 24);
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.secaoAtiva.set(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    for (const link of this.links) {
      const secao = document.getElementById(link.id);
      if (secao) this.observer.observe(secao);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    document.body.style.removeProperty('overflow');
  }

  public alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
    document.body.style.overflow = this.menuAberto() ? 'hidden' : '';
  }

  public fecharMenu(): void {
    this.menuAberto.set(false);
    document.body.style.removeProperty('overflow');
  }
}
