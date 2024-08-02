import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: `[textUppercase]`,
})
export class TextUpperCase {
  myEle: any;

  constructor(elementRef: ElementRef) {
    this.myEle = elementRef;
  }

  @HostListener('blur') onBlur() {
    console.log('Directive triggered', this.myEle.nativeElement.value);

    let eleVal: string = this.myEle.nativeElement.value;
    this.myEle.nativeElement.value = eleVal.toUpperCase();
  }
}
