import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appItemClass]'
})
export class ItemClassDirective {

  @Input() appItemClass;
  @Input() mouseOutClass;

  constructor(private elementRef: ElementRef) {

  }

  @HostListener('mouseover')
  mouseOver() {
    (this.elementRef.nativeElement as HTMLElement).classList.add(this.appItemClass);
    (this.elementRef.nativeElement as HTMLElement).classList.remove(this.mouseOutClass);
  }

  @HostListener('mouseout')
  mouseOut() {
    (this.elementRef.nativeElement as HTMLElement).classList.remove(this.appItemClass);
    (this.elementRef.nativeElement as HTMLElement).classList.add(this.mouseOutClass);
  }

}
