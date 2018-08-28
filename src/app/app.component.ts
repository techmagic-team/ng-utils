import { Component } from '@angular/core';

@Component({
  selector: 'ngu-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  onThrottleClick($event: MouseEvent): void {
    console.log('Throttle Click', $event);
  }

  onClickOutside($event: MouseEvent): void {
    console.log('Click Outside', $event);
  }
}
