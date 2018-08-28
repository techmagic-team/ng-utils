import { NgModule } from '@angular/core';

// directives
import { ThrottleClickDirective } from './directives/throttle-click.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  imports: [],
  declarations: [
    ThrottleClickDirective,
    ClickOutsideDirective,
  ],
  exports: [
    ThrottleClickDirective,
    ClickOutsideDirective,
  ],
})
export class NgUtilsModule { }
