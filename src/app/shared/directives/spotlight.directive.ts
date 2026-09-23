import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

/**
 * Brilho que segue o cursor + inclinação 3D opcional.
 * Expõe --mx / --my (posição do mouse) e --rx / --ry (rotação) para o CSS.
 *
 * Uso: <article appSpotlight></article>
 *      <article appSpotlight tilt></article>
 */
@Directive({
  selector: '[appSpotlight]',
  standalone: true
})
export class SpotlightDirective {
  /** Ativa a inclinação 3D. Presença do atributo basta: <div appSpotlight tilt>. */
  @Input()
  set tilt(valor: boolean | string) {
    this.inclinar = valor !== false && valor !== 'false';
  }

  /** Intensidade máxima da inclinação, em graus. */
  @Input() tiltMax = 7;

  private inclinar = false;
  private readonly host = inject(ElementRef<HTMLElement>);
  private frame = 0;

  @HostListener('pointermove', ['$event'])
  onMove(evento: PointerEvent): void {
    if (evento.pointerType === 'touch') return;

    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const el = this.host.nativeElement as HTMLElement;
      const box = el.getBoundingClientRect();
      const x = (evento.clientX - box.left) / box.width;
      const y = (evento.clientY - box.top) / box.height;

      el.style.setProperty('--mx', `${x * 100}%`);
      el.style.setProperty('--my', `${y * 100}%`);

      if (this.inclinar) {
        el.style.setProperty('--ry', `${(x - 0.5) * 2 * this.tiltMax}deg`);
        el.style.setProperty('--rx', `${(0.5 - y) * 2 * this.tiltMax}deg`);
      }
    });
  }

  @HostListener('pointerleave')
  onLeave(): void {
    cancelAnimationFrame(this.frame);
    const el = this.host.nativeElement as HTMLElement;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }
}
