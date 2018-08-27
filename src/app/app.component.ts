import { Component } from '@angular/core';

@Component({
  selector: 'ngu-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  onClick(): void {
    console.log('Test Click');
  }
}
