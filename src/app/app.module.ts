import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgUtilsModule } from 'ng-utils-lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgUtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
