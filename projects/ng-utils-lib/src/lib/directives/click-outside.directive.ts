import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[nguClickOutside]',
})
export class ClickOutsideDirective {
  @Output() nguClickOutside = new EventEmitter<MouseEvent>();

  constructor(
    private el: ElementRef,
  ) {}

  @HostListener('document:click', ['$event'])
  onClick($event: MouseEvent): void {
    const isClickInside = this.el.nativeElement.contains($event.target);

    if (!isClickInside) {
      this.nguClickOutside.emit($event);
    }
  }
}
