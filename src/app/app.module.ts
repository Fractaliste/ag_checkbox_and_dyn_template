import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BCheckboxComponent } from './b-checkbox/b-checkbox.component';
import { Aside1Component } from './aside1/aside1.component';
import { Aside2Component } from './aside2/aside2.component';
import { AsideLoaderDirective } from './aside-loader.directive';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    BCheckboxComponent,
    Aside1Component,
    Aside2Component,
    AsideLoaderDirective,
    NestedComponent
  ],
  entryComponents: [
    Aside1Component,
    Aside2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
