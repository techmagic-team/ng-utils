import { Directive, HostListener, Output, EventEmitter, OnInit, OnDestroy, Input } from '@angular/core';

// rxjs
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[nguThrottleClick]',
})
export class ThrottleClickDirective implements OnInit, OnDestroy {
  @Input() throttleTime = 1000;
  @Output() nguThrottleClick = new EventEmitter<MouseEvent>();

  private clicks = new Subject();
  private subscription: Subscription;

  constructor() {}

  @HostListener('click', ['$event'])
  onClickEvent(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.clicks.next(event);
  }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      throttleTime(this.throttleTime),
    ).subscribe((event: MouseEvent) => this.nguThrottleClick.emit(event));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
