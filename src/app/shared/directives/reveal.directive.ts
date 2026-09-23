import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  inject
} from '@angular/core';

/**
 * Revela o elemento com um fade/slide assim que ele entra na viewport.
 *
 * O atributo `data-reveal` precisa ser estático (é ele que casa com o seletor
 * e com o CSS de estado inicial). O atraso vai no input:
 *
 *   <div data-reveal></div>
 *   <div data-reveal [revealDelay]="120"></div>
 */
@Directive({
  selector: '[data-reveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay: string | number = 0;

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private resgate?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;
    const delay = Number(this.revealDelay) || 0;

    if (delay) {
      el.style.setProperty('--reveal-delay', `${delay}ms`);
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          clearTimeout(this.resgate);
          this.revelar(entry.target as HTMLElement);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);

    // nada pode ficar invisível: se o observer não disparar, revela mesmo assim
    this.resgate = setTimeout(() => this.revelar(el), 2000);
  }

  private revelar(el: HTMLElement): void {
    el.classList.add('is-visible');
    this.observer?.unobserve(el);
  }

  ngOnDestroy(): void {
    clearTimeout(this.resgate);
    this.observer?.disconnect();
  }
}
