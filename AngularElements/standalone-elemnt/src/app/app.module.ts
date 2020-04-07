import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [
    SimpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SimpleComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(SimpleComponent, {injector});
    customElements.define('app-simple', custom);
  }
  ngDoBootstrap() {}
}
