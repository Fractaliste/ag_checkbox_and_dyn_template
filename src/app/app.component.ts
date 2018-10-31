import { Component, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { AsideLoaderDirective } from './aside-loader.directive';
import { Aside1Component } from './aside1/aside1.component';
import { Aside2Component } from './aside2/aside2.component';
import { Struct } from './struct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Truc';
  children: Struct[] = [];



  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.children.push(new Struct("a", [new Struct("a1", [new Struct("a1z"), new Struct("a2z")]), new Struct("a2")]))
    this.children.push(new Struct("b", [new Struct("b1"), new Struct("b2")]))
    this.children.push(new Struct("c"))
  }

  @ViewChild(AsideLoaderDirective) aside: AsideLoaderDirective;

  a1() {
    this.load(Aside1Component)
  }

  load<T>(type: Type<T>) {
    let factory = this.componentFactoryResolver.resolveComponentFactory(type);
    this.aside.viewContainerRef.clear();
    this.aside.viewContainerRef.createComponent(factory);
  }

  a2() {
    this.load(Aside2Component)
  }
}
