import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAsideLoader]'
})
export class AsideLoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
