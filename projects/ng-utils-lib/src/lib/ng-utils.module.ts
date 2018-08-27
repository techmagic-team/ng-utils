import { NgModule } from '@angular/core';
import { ThrottleClickDirective } from './directives/throttle-click.directive';

@NgModule({
  imports: [],
  declarations: [
    ThrottleClickDirective,
  ],
  exports: [
    ThrottleClickDirective,
  ],
})
export class NgUtilsModule { }
