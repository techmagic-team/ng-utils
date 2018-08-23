import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgUtilsLibModule } from 'ng-utils-lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgUtilsLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
